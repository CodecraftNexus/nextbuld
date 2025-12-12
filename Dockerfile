# Use a Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built Next.js files and public folder
COPY .next ./.next
COPY public ./public
COPY package.json ./package.json
COPY next.config.js ./next.config.js
# Expose the default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
