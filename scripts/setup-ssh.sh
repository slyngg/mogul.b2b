#!/bin/bash
# ===========================================
# SSH Key Setup Script for Mogul B2B Deployment
# ===========================================
# Run this script on your LOCAL machine to generate
# SSH keys for GitHub Actions deployment

set -e

KEY_NAME="mogul_b2b_deploy"
KEY_PATH="$HOME/.ssh/$KEY_NAME"

echo "🔐 Mogul B2B - SSH Key Setup"
echo "============================"
echo ""

# Check if key already exists
if [ -f "$KEY_PATH" ]; then
    echo "⚠️  Key already exists at $KEY_PATH"
    read -p "Do you want to overwrite it? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
fi

# Generate SSH key
echo "📝 Generating SSH key pair..."
ssh-keygen -t ed25519 -C "mogul-b2b-deploy@github-actions" -f "$KEY_PATH" -N ""

echo ""
echo "✅ SSH key pair generated!"
echo ""
echo "============================"
echo "📋 NEXT STEPS:"
echo "============================"
echo ""
echo "1️⃣  Add PUBLIC key to Namecheap cPanel:"
echo "    - Log into cPanel"
echo "    - Go to: Security → SSH Access → Manage SSH Keys"
echo "    - Click 'Import Key'"
echo "    - Paste this PUBLIC key:"
echo ""
echo "--- PUBLIC KEY (copy everything below) ---"
cat "$KEY_PATH.pub"
echo ""
echo "--- END PUBLIC KEY ---"
echo ""
echo "    - After importing, click 'Manage' → 'Authorize'"
echo ""
echo "2️⃣  Add PRIVATE key to GitHub Secrets:"
echo "    - Go to: GitHub Repo → Settings → Secrets and variables → Actions"
echo "    - Click 'New repository secret'"
echo "    - Name: SSH_PRIVATE_KEY"
echo "    - Value: (paste the private key below)"
echo ""
echo "--- PRIVATE KEY (copy everything below) ---"
cat "$KEY_PATH"
echo ""
echo "--- END PRIVATE KEY ---"
echo ""
echo "3️⃣  Test SSH connection:"
echo "    ssh -i $KEY_PATH YOUR_CPANEL_USER@YOUR_SERVER_HOSTNAME"
echo ""
echo "🎉 Done! Keep your private key secure."
