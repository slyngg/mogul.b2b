#!/bin/bash
# ===========================================
# Local Manual Deployment Script
# ===========================================
# Use this for quick manual deployments without GitHub Actions

set -e

# Configuration - UPDATE THESE VALUES
SSH_KEY="$HOME/.ssh/mogul_b2b_deploy"
SSH_USER="YOUR_CPANEL_USERNAME"
SSH_HOST="YOUR_SERVER_HOSTNAME"
PROD_PATH="~/public_html"
DEV_PATH="~/dev_html"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Mogul B2B - Local Deployment${NC}"
echo "================================"

# Check for environment argument
ENV=${1:-prod}

if [ "$ENV" != "prod" ] && [ "$ENV" != "dev" ]; then
    echo -e "${RED}❌ Invalid environment. Use: ./local-deploy.sh [prod|dev]${NC}"
    exit 1
fi

# Set target path
if [ "$ENV" == "prod" ]; then
    TARGET_PATH=$PROD_PATH
    echo -e "${YELLOW}📦 Deploying to PRODUCTION${NC}"
else
    TARGET_PATH=$DEV_PATH
    echo -e "${YELLOW}📦 Deploying to DEVELOPMENT${NC}"
fi

# Build
echo ""
echo "📝 Installing dependencies..."
npm ci

echo ""
echo "🔨 Building project..."
npm run build

# Deploy
echo ""
echo "📤 Uploading to server..."
rsync -avz --delete \
    -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" \
    ./dist/ \
    $SSH_USER@$SSH_HOST:$TARGET_PATH

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo "Environment: $ENV"
echo "Target: $TARGET_PATH"
