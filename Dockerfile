# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
# This step is not mandatory for this simple script, but it's good practice if you have dependencies.
# RUN npm init -y  # Uncomment if you need to create package.json

# Copy the entire application code to the container
COPY . .

# Expose port 3000 (optional, as your app doesn't run a web server)
EXPOSE 3000

# Command to run the app
CMD ["node", "prime-number.js"]

