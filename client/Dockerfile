# Use a minimalistic PHP image as a parent image
FROM php:alpine

# Copy the current directory contents into the container
COPY dist/ /var/www/html

# Set the working directory in the container
WORKDIR /var/www/html

# Expose port 80 to the outside world
EXPOSE 8083

# Start the built-in PHP server when the container runs
CMD ["php", "-S", "0.0.0.0:8083"]