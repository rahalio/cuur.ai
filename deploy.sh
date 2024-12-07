#!/bin/bash

# Load environment variables from the .env file
if [ -f .env ]; then
    set -a
    . .env
    set +a
else
    echo "Error: .env file not found"
    exit 1
fi

# Extract and validate environment variables for AWS
S3_BUCKET=${VITE_S3_BUCKET_NAME}
DISTRIBUTION_ID=${VITE_CLOUDFRONT_DISTRIBUTION_ID}

if [ -z "$S3_BUCKET" ]; then
    echo -e "${RED}Error: VITE_S3_BUCKET_NAME is not set in .env.${NC}"
    exit 1
fi

if [ -z "$DISTRIBUTION_ID" ]; then
    echo -e "${RED}Error: VITE_CLOUDFRONT_DISTRIBUTION_ID is not set in .env.${NC}"
    exit 1
fi

# Define additional variables
OUTPUT_DIR="dist"  # Vite's default output directory

# Colors for output formatting
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Log output to file
LOG_FILE="deploy.log"
exec > >(tee -i $LOG_FILE)
exec 2>&1

# Step 1: Build the Vite project
echo -e "${GREEN}Building the Vite project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to build the Vite project.${NC}"
    exit 1
fi

# Step 2: Sync files to S3
echo -e "${GREEN}Syncing files to S3 bucket: ${S3_BUCKET}${NC}"
aws s3 sync $OUTPUT_DIR s3://$S3_BUCKET/ --delete --exact-timestamps

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to sync files to S3 bucket: ${S3_BUCKET}.${NC}"
    exit 1
fi

# Step 3: Create CloudFront cache invalidation
echo -e "${GREEN}Creating CloudFront cache invalidation...${NC}"
INVALIDATION_OUTPUT=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*")

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to create CloudFront cache invalidation.${NC}"
    exit 1
fi

# Extract invalidation ID from output
INVALIDATION_ID=$(echo $INVALIDATION_OUTPUT | grep -o '"Id": "[^"]*' | grep -o '[^"]*$')

echo -e "${GREEN}Successfully created CloudFront cache invalidation with ID: ${INVALIDATION_ID}${NC}"

# Step 4: Display completion message
echo -e "${GREEN}Deployment complete!${NC}"
