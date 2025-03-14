# Use official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./

# Install dependencies
RUN corepack enable && corepack prepare yarn@stable --activate \
    && yarn config set nodeLinker node-modules \
    && yarn install --immutable

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the Next.js server
CMD ["yarn", "start"]
