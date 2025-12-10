# 🚀 Mogul B2B - Deployment Guide

## Project Summary

| Property | Value |
|----------|-------|
| **Stack** | Vite + React 19 + TypeScript + TailwindCSS |
| **Build Output** | Static files (`dist/`) |
| **Hosting** | Namecheap Stellar (cPanel) |
| **Deployment** | GitHub Actions + RSYNC over SSH |
| **Branches** | `main` → Production, `dev` → Development |

---

## 📁 File Tree Layout

```
mogul.b2b/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD workflow
├── scripts/
│   ├── setup-ssh.sh            # SSH key generation script
│   └── local-deploy.sh         # Manual deployment script
├── src/                        # Source code
├── public/                     # Static assets
├── dist/                       # Build output (gitignored)
├── .env.example                # Environment template
├── .env.prod                   # Production env reference
├── .env.dev                    # Development env reference
├── DEPLOYMENT.md               # This file
└── package.json
```

---

## 🔐 GitHub Secrets Required

Go to: **GitHub Repo → Settings → Secrets and variables → Actions**

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `SSH_PRIVATE_KEY` | Private SSH key for deployment | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SSH_HOST` | Namecheap server hostname | `server123.web-hosting.com` |
| `SSH_USER` | cPanel username | `youruser` |
| `PROD_PATH` | Production directory path | `~/public_html` or `~/yourdomain.com` |
| `DEV_PATH` | Development directory path | `~/dev.yourdomain.com` or `~/dev_html` |

---

## 🛠 Server Setup Instructions

### Step 1: Find Your Server Details

1. Log into **Namecheap Dashboard**
2. Go to **Hosting List** → Click **cPanel** button
3. In cPanel, go to **Server Information** (right sidebar)
4. Note down:
   - **Server Name** (e.g., `server123.web-hosting.com`) → This is `SSH_HOST`
   - **Username** → This is `SSH_USER`

### Step 2: Enable SSH Access in cPanel

1. In cPanel, go to **Security → SSH Access**
2. Click **Manage SSH Keys**
3. Click **Generate a New Key** OR **Import Key**

### Step 3: Generate & Add SSH Keys

**Option A: Run the setup script (recommended)**

```bash
chmod +x scripts/setup-ssh.sh
./scripts/setup-ssh.sh
```

**Option B: Manual generation**

```bash
# Generate key pair
ssh-keygen -t ed25519 -C "mogul-b2b-deploy" -f ~/.ssh/mogul_b2b_deploy -N ""

# View public key (add to cPanel)
cat ~/.ssh/mogul_b2b_deploy.pub

# View private key (add to GitHub Secrets)
cat ~/.ssh/mogul_b2b_deploy
```

### Step 4: Authorize the Key in cPanel

1. After importing the public key in cPanel SSH Access
2. Click **Manage** next to the key
3. Click **Authorize**

### Step 5: Test SSH Connection

```bash
ssh -i ~/.ssh/mogul_b2b_deploy YOUR_USER@YOUR_SERVER
```

---

## 📂 Server Directory Layout

### For Primary Domain (public_html)

```
/home/username/
├── public_html/          # Production site (main branch)
│   ├── index.html
│   └── assets/
└── dev_html/             # Development site (dev branch)
    ├── index.html
    └── assets/
```

### For Addon Domain

```
/home/username/
├── yourdomain.com/       # Production (PROD_PATH)
│   ├── index.html
│   └── assets/
└── dev.yourdomain.com/   # Development (DEV_PATH)
    ├── index.html
    └── assets/
```

### Create Dev Directory (if needed)

In cPanel File Manager or via SSH:

```bash
mkdir -p ~/dev_html
```

Or create a subdomain in cPanel:
1. Go to **Domains → Subdomains**
2. Create `dev.yourdomain.com`
3. Point it to a new folder

---

## 🚀 Deployment Workflow

### Automatic Deployment (GitHub Actions)

1. **Push to `main` branch** → Deploys to Production (`PROD_PATH`)
2. **Push to `dev` branch** → Deploys to Development (`DEV_PATH`)

```bash
# Deploy to production
git checkout main
git merge feature-branch
git push origin main

# Deploy to development
git checkout dev
git merge feature-branch
git push origin dev
```

### Manual Deployment

```bash
# Make script executable (first time only)
chmod +x scripts/local-deploy.sh

# Edit the script to add your server details, then:

# Deploy to production
./scripts/local-deploy.sh prod

# Deploy to development
./scripts/local-deploy.sh dev
```

---

## 🔧 Troubleshooting FAQ

### SSH Connection Refused

```
Permission denied (publickey)
```

**Solutions:**
1. Ensure the public key is **authorized** in cPanel (not just imported)
2. Check the key permissions: `chmod 600 ~/.ssh/mogul_b2b_deploy`
3. Verify SSH is enabled for your Stellar plan (some plans require enabling it)

### RSYNC Command Not Found

Namecheap Stellar should have rsync. If not:

```bash
# Alternative: Use SCP in the workflow
scp -r ./dist/* user@host:~/public_html/
```

### Build Fails in GitHub Actions

1. Check Node version matches local (`node -v`)
2. Ensure `package-lock.json` is committed
3. Check for TypeScript errors: `npm run build` locally

### 404 Errors After Deployment

For React Router (client-side routing), add `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Deployment Succeeds but Site Not Updated

1. Clear browser cache (Ctrl+Shift+R)
2. Check you're looking at the right domain
3. Verify `PROD_PATH` points to correct directory

---

## 📋 Quick Reference - GitHub Secrets Cheat Sheet

```
SSH_PRIVATE_KEY   = [contents of ~/.ssh/mogul_b2b_deploy]
SSH_HOST          = server123.web-hosting.com
SSH_USER          = yourcpanelusername
PROD_PATH         = ~/public_html
DEV_PATH          = ~/dev_html
```

---

## ✅ Deployment Checklist

- [ ] SSH key generated locally
- [ ] Public key added to cPanel and **authorized**
- [ ] Private key added to GitHub Secrets as `SSH_PRIVATE_KEY`
- [ ] `SSH_HOST` secret added (server hostname)
- [ ] `SSH_USER` secret added (cPanel username)
- [ ] `PROD_PATH` secret added (production directory)
- [ ] `DEV_PATH` secret added (development directory)
- [ ] Test SSH connection works locally
- [ ] Push to `main` and verify deployment
- [ ] Push to `dev` and verify deployment

---

## 🎉 You're All Set!

Once configured, every push to `main` or `dev` will automatically:

1. ✅ Checkout your code
2. ✅ Install dependencies
3. ✅ Build the Vite project
4. ✅ Deploy via RSYNC to your server
5. ✅ Clear any cached files

**Questions?** Check the GitHub Actions logs for detailed output.
