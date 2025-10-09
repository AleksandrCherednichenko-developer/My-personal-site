#!/bin/bash

# 🚀 Enhanced Deploy Script for My Personal Site
# This script provides multiple deployment options

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    log_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Function to deploy manually
deploy_manual() {
    log_info "Starting manual deployment..."
    
    # Check if dependencies are installed
    if [ ! -d "node_modules" ]; then
        log_info "Installing dependencies..."
        npm install
    fi
    
    # Run linting
    log_info "Running linting..."
    npm run lint:check
    
    # Build project
    log_info "Building project..."
    npm run build
    
    # Deploy to GitHub Pages
    log_info "Deploying to GitHub Pages..."
    npm run deploy
    
    log_success "Manual deployment completed!"
}

# Function to clean and fresh deploy
deploy_fresh() {
    log_info "Starting fresh deployment..."
    
    # Clean everything
    log_info "Cleaning project..."
    npm run clean
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install
    
    # Build and deploy
    log_info "Building and deploying..."
    npm run deploy:manual
    
    log_success "Fresh deployment completed!"
}

# Function to show help
show_help() {
    echo "🚀 Enhanced Deploy Script"
    echo ""
    echo "Usage: ./deploy.sh [option]"
    echo ""
    echo "Options:"
    echo "  manual    - Manual deployment (lint + build + deploy)"
    echo "  fresh     - Fresh deployment (clean + install + build + deploy)"
    echo "  build     - Just build the project"
    echo "  lint      - Just run linting"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh manual"
    echo "  ./deploy.sh fresh"
    echo "  ./deploy.sh build"
}

# Main script logic
case "${1:-help}" in
    "manual")
        deploy_manual
        ;;
    "fresh")
        deploy_fresh
        ;;
    "build")
        log_info "Building project..."
        npm run build
        log_success "Build completed!"
        ;;
    "lint")
        log_info "Running linting..."
        npm run lint:check
        log_success "Linting completed!"
        ;;
    "help"|*)
        show_help
        ;;
esac
