# Use official Node.js image for building
FROM node:18 AS builder

WORKDIR /app

# Install Yarn globally
RUN corepack enable && corepack prepare yarn@stable --activate

# Set Yarn to use node_modules instead of PnP
ENV YARN_NODE_LINKER=node-modules

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --immutable

# Copy the entire app source
COPY . .

# Build the frontend
RUN yarn build

# Expose the correct port (Next.js runs on 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["yarn", "start"]
