# using a python small basic image
FROM node:alpine

# exposing our app port in docker internal network
EXPOSE 5000

# creates a dir for our application
WORKDIR /mult

# copy our requirements.txt file and install dependencies
COPY package.json .
RUN npm install

# copy the rest of our application
COPY . .
# run the application
CMD node app.js
