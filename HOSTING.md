# 🚀 Mero School Backend - Hosting Guide

Your Mero School backend is **production-ready** and can be deployed to various hosting platforms. Here's a comprehensive guide for hosting options:

## 🎯 **Quick Start - Choose Your Platform**

### **Option 1: Railway (Recommended for Beginners)**
- **Cost**: Free tier available
- **Setup Time**: 5 minutes
- **Difficulty**: Easy
- **Best for**: Students, small projects, testing

### **Option 2: Heroku**
- **Cost**: Free tier available
- **Setup Time**: 10 minutes
- **Difficulty**: Easy
- **Best for**: Production apps, scalability

### **Option 3: DigitalOcean App Platform**
- **Cost**: $5/month
- **Setup Time**: 15 minutes
- **Difficulty**: Medium
- **Best for**: Production apps, reliability

### **Option 4: AWS**
- **Cost**: Pay-as-you-go
- **Setup Time**: 30 minutes
- **Difficulty**: Advanced
- **Best for**: Enterprise, high scalability

---

## 🚀 **Railway Deployment (Easiest)**

### **Step 1: Prepare Your Code**
```bash
# Make sure you're in the project directory
cd mero-school-backend

# Install dependencies
npm install

# Create .env file
cp env.example .env
# Edit .env with your settings
```

### **Step 2: Deploy to Railway**
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will automatically detect it's a Node.js app
7. Add environment variables in Railway dashboard
8. Deploy!

### **Step 3: Configure Environment Variables**
In Railway dashboard, add these variables:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-domain.com
```

### **Step 4: Add MongoDB**
1. In Railway dashboard, click "New"
2. Select "Database" → "MongoDB"
3. Railway will automatically connect it to your app
4. Copy the connection string to your environment variables

**✅ Done!** Your app will be live at `https://your-app-name.railway.app`

---

## 🎯 **Heroku Deployment**

### **Step 1: Install Heroku CLI**
```bash
# Windows
winget install --id=Heroku.HerokuCLI

# macOS
brew tap heroku/brew && brew install heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

### **Step 2: Login and Deploy**
```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create mero-school-backend

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-super-secret-jwt-key
heroku config:set JWT_EXPIRE=7d

# Deploy
git push heroku main
```

### **Step 3: Open Your App**
```bash
heroku open
```

**✅ Done!** Your app will be live at `https://your-app-name.herokuapp.com`

---

## 🌊 **DigitalOcean App Platform**

### **Step 1: Create DigitalOcean Account**
1. Go to [DigitalOcean.com](https://digitalocean.com)
2. Sign up and add payment method
3. Go to "Apps" section

### **Step 2: Deploy Your App**
1. Click "Create App"
2. Connect your GitHub repository
3. Select the repository and branch
4. DigitalOcean will auto-detect Node.js
5. Configure build settings:
   - Build Command: `npm install`
   - Run Command: `npm start`
6. Add environment variables
7. Deploy!

### **Step 3: Add Database**
1. In your app dashboard, click "Resources"
2. Add "Database" → "MongoDB"
3. DigitalOcean will automatically connect it

**✅ Done!** Your app will be live at `https://your-app-name.ondigitalocean.app`

---

## ☁️ **AWS Deployment**

### **Option A: AWS Elastic Beanstalk (Easiest)**

#### **Step 1: Prepare for AWS**
```bash
# Install AWS CLI
# Windows: Download from AWS website
# macOS: brew install awscli
# Linux: sudo apt install awscli

# Configure AWS
aws configure
# Enter your AWS Access Key ID, Secret Access Key, region
```

#### **Step 2: Deploy with EB CLI**
```bash
# Install EB CLI
pip install awsebcli

# Initialize EB application
eb init mero-school-backend

# Create environment
eb create production

# Deploy
eb deploy
```

### **Option B: AWS App Runner (Serverless)**

1. Go to AWS App Runner console
2. Create new service
3. Connect your GitHub repository
4. Configure build settings
5. Deploy!

**✅ Done!** Your app will be live at the provided AWS URL

---

## 🐳 **Docker Deployment (Any Server)**

### **Step 1: Install Docker**
```bash
# Download Docker Desktop from docker.com
# Or install Docker Engine on Linux
```

### **Step 2: Deploy with Docker Compose**
```bash
# Clone your repository
git clone <your-repo-url>
cd mero-school-backend

# Create .env file
cp env.example .env
# Edit .env with your settings

# Deploy
docker-compose up -d
```

### **Step 3: Access Your App**
Your app will be available at `http://your-server-ip:5000`

---

## 🔧 **Environment Variables Setup**

### **Required Variables**
```env
# Server
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-frontend-domain.com

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mero-school

# Security
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Email (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# AI Services (Optional)
OPENAI_API_KEY=your-openai-api-key

# File Storage (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### **MongoDB Setup Options**

#### **Option 1: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Get connection string
4. Add to environment variables

#### **Option 2: Railway MongoDB**
1. Add MongoDB service in Railway
2. Connection string is automatically provided

#### **Option 3: Heroku MongoDB**
1. Add MongoDB addon in Heroku
2. Connection string is automatically provided

---

## 🔍 **Testing Your Deployment**

### **Health Check**
```bash
curl https://your-app-domain.com/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "production"
}
```

### **API Test**
```bash
# Test registration
curl -X POST https://your-app-domain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "Password123",
    "firstName": "Test",
    "lastName": "User",
    "role": "student"
  }'
```

---

## 📊 **Monitoring & Maintenance**

### **Logs**
```bash
# Railway
railway logs

# Heroku
heroku logs --tail

# Docker
docker-compose logs -f

# DigitalOcean
# Check in App Platform dashboard
```

### **Scaling**
- **Railway**: Automatic scaling
- **Heroku**: `heroku ps:scale web=2`
- **DigitalOcean**: Adjust in dashboard
- **AWS**: Auto-scaling groups

### **Backups**
- **MongoDB Atlas**: Automatic backups
- **Railway**: Automatic backups
- **Heroku**: Manual backups
- **DigitalOcean**: Automatic backups

---

## 🛡️ **Security Checklist**

- [ ] JWT_SECRET is strong and unique
- [ ] HTTPS is enabled
- [ ] CORS is properly configured
- [ ] Rate limiting is active
- [ ] Environment variables are secure
- [ ] Database connection is encrypted
- [ ] File uploads are validated
- [ ] Error messages don't expose sensitive info

---

## 🆘 **Troubleshooting**

### **Common Issues**

#### **App Won't Start**
```bash
# Check logs
railway logs
heroku logs --tail
docker-compose logs

# Check environment variables
railway variables
heroku config
```

#### **Database Connection Issues**
- Verify MONGODB_URI is correct
- Check if MongoDB service is running
- Ensure network access is allowed

#### **File Upload Issues**
- Check file size limits
- Verify upload directory permissions
- Ensure storage service is configured

### **Performance Issues**
- Enable compression
- Use CDN for static files
- Optimize database queries
- Enable caching

---

## 🎉 **Success!**

Your Mero School backend is now live and ready to serve your virtual classroom platform!

### **Next Steps:**
1. **Connect your frontend** to the backend API
2. **Test all features** (auth, uploads, video chat)
3. **Set up monitoring** and alerts
4. **Configure backups** and disaster recovery
5. **Set up CI/CD** for automatic deployments

### **Support:**
- Check the logs for errors
- Review the API documentation
- Test endpoints with Postman or curl
- Monitor performance metrics

---

**🚀 Happy Hosting! Your virtual classroom is ready to educate the world! 🌍** 