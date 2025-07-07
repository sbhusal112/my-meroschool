#!/bin/bash

# Mero School Backend Deployment Script
# This script helps deploy the backend to various hosting platforms

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    # Check if Docker is installed
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    # Check if Docker Compose is installed
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    # Check if .env file exists
    if [ ! -f .env ]; then
        print_warning ".env file not found. Creating from template..."
        if [ -f env.example ]; then
            cp env.example .env
            print_warning "Please edit .env file with your configuration before continuing."
        else
            print_error "env.example not found. Please create .env file manually."
            exit 1
        fi
    fi
    
    print_success "Prerequisites check completed"
}

# Function to deploy with Docker Compose
deploy_docker() {
    print_status "Deploying with Docker Compose..."
    
    # Build and start services
    docker-compose up -d --build
    
    print_success "Docker deployment completed"
    print_status "Services are starting up..."
    print_status "Check logs with: docker-compose logs -f"
}

# Function to deploy to Heroku
deploy_heroku() {
    print_status "Deploying to Heroku..."
    
    # Check if Heroku CLI is installed
    if ! command -v heroku &> /dev/null; then
        print_error "Heroku CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if logged in to Heroku
    if ! heroku auth:whoami &> /dev/null; then
        print_error "Not logged in to Heroku. Please run 'heroku login' first."
        exit 1
    fi
    
    # Create Heroku app if it doesn't exist
    if [ -z "$HEROKU_APP_NAME" ]; then
        HEROKU_APP_NAME="mero-school-$(date +%s)"
        print_status "Creating Heroku app: $HEROKU_APP_NAME"
        heroku create $HEROKU_APP_NAME
    fi
    
    # Add MongoDB addon
    print_status "Adding MongoDB addon..."
    heroku addons:create mongolab:sandbox --app $HEROKU_APP_NAME
    
    # Set environment variables
    print_status "Setting environment variables..."
    heroku config:set NODE_ENV=production --app $HEROKU_APP_NAME
    heroku config:set JWT_SECRET=$(openssl rand -base64 32) --app $HEROKU_APP_NAME
    
    # Deploy
    print_status "Deploying to Heroku..."
    git push heroku main
    
    print_success "Heroku deployment completed"
    print_status "Your app is available at: https://$HEROKU_APP_NAME.herokuapp.com"
}

# Function to deploy to Railway
deploy_railway() {
    print_status "Deploying to Railway..."
    
    # Check if Railway CLI is installed
    if ! command -v railway &> /dev/null; then
        print_error "Railway CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Login to Railway
    if ! railway whoami &> /dev/null; then
        print_error "Not logged in to Railway. Please run 'railway login' first."
        exit 1
    fi
    
    # Deploy
    print_status "Deploying to Railway..."
    railway up
    
    print_success "Railway deployment completed"
}

# Function to deploy to DigitalOcean App Platform
deploy_digitalocean() {
    print_status "Deploying to DigitalOcean App Platform..."
    
    # Check if doctl is installed
    if ! command -v doctl &> /dev/null; then
        print_error "DigitalOcean CLI (doctl) is not installed. Please install it first."
        exit 1
    fi
    
    # Check if authenticated
    if ! doctl account get &> /dev/null; then
        print_error "Not authenticated with DigitalOcean. Please run 'doctl auth init' first."
        exit 1
    fi
    
    print_status "Please deploy manually through DigitalOcean App Platform dashboard:"
    print_status "1. Go to https://cloud.digitalocean.com/apps"
    print_status "2. Click 'Create App'"
    print_status "3. Connect your GitHub repository"
    print_status "4. Configure environment variables"
    print_status "5. Deploy"
}

# Function to deploy to AWS
deploy_aws() {
    print_status "Deploying to AWS..."
    
    # Check if AWS CLI is installed
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if configured
    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS CLI not configured. Please run 'aws configure' first."
        exit 1
    fi
    
    print_status "Please deploy manually through AWS:"
    print_status "1. Use AWS Elastic Beanstalk"
    print_status "2. Or use AWS ECS with Fargate"
    print_status "3. Or use AWS App Runner"
    print_status "4. Configure environment variables"
    print_status "5. Set up MongoDB Atlas or DocumentDB"
}

# Function to show deployment options
show_options() {
    echo -e "${BLUE}Mero School Backend Deployment Options:${NC}"
    echo ""
    echo "1. Docker Compose (Local/Server)"
    echo "2. Heroku"
    echo "3. Railway"
    echo "4. DigitalOcean App Platform"
    echo "5. AWS"
    echo "6. Check prerequisites"
    echo "7. Exit"
    echo ""
}

# Main script
main() {
    echo -e "${GREEN}🚀 Mero School Backend Deployment Script${NC}"
    echo ""
    
    # Check prerequisites first
    check_prerequisites
    
    while true; do
        show_options
        read -p "Choose deployment option (1-7): " choice
        
        case $choice in
            1)
                deploy_docker
                break
                ;;
            2)
                deploy_heroku
                break
                ;;
            3)
                deploy_railway
                break
                ;;
            4)
                deploy_digitalocean
                break
                ;;
            5)
                deploy_aws
                break
                ;;
            6)
                check_prerequisites
                ;;
            7)
                print_status "Exiting..."
                exit 0
                ;;
            *)
                print_error "Invalid option. Please choose 1-7."
                ;;
        esac
    done
}

# Run main function
main "$@" 