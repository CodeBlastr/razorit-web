# Use official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./

# Use build arguments to pass environment variables
ARG NEXT_PUBLIC_RAZORIT_API_URL
ARG NEXT_PUBLIC_RAZORIT_API_CLIENT_ID
ARG NEXT_PUBLIC_RAZORIT_API_CLIENT_SECRET

# Set environment variables inside the container
ENV NEXT_PUBLIC_RAZORIT_API_URL=$NEXT_PUBLIC_RAZORIT_API_URL
ENV NEXT_PUBLIC_RAZORIT_API_CLIENT_ID=$NEXT_PUBLIC_RAZORIT_API_CLIENT_ID
ENV NEXT_PUBLIC_RAZORIT_API_CLIENT_SECRET=$NEXT_PUBLIC_RAZORIT_API_CLIENT_SECRET

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
