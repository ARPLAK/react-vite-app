#!/bin/bash

CONTAINER_NAME="react-container"
IMAGE_NAME="react-image"
PORT="3000"

echo "Pulling latest code..."
git pull origin main

echo "Stopping existing container..."
docker stop $CONTAINER_NAME || true

echo "Removing container..."
docker rm $CONTAINER_NAME || true

echo "Building new image..."
docker build -t $IMAGE_NAME .

echo "Starting container..."
docker run -d -p $PORT:80 --name $CONTAINER_NAME $IMAGE_NAME

echo "Deployment complete"
