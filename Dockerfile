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

# Use a lightweight Node.js image for serving
FROM node:18 AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js default port
EXPOSE 3000

# Start Next.js server
CMD ["yarn", "next", "start"]
