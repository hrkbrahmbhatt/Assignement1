# Assignement1
Promise Usage



# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.17.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```

- to run project in VS code console type
- node server.js

# Task to do 

1. Node Module with a `findServer()` function which should return a Promise that either: 
     a. Resolves with the online server that has the lowest priority number. 
     b. Rejects with an error, if no Servers are online. 

2. HTTP GET requests should be used to determine if a server is online or offline additionally the following is required: 
    a. All GET requests should be done simultaneously. 
    b. A GET request should timeout after 5 seconds. 
    c. A server should be considered online if it’s response status code is between 200 and 299. 



# Output 

![Alt Text](https://github.com/hrkbrahmbhatt/Assignement1/blob/master/giff.gif)
