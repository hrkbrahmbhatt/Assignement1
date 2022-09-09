# Assignement1
Promise Usage



# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.17.0


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```

- Build and run the project
```
node index.js
```
  Navigate to `http://localhost:3000` in POSTMAN 

- API Document endpoints

   Endpoint : http://localhost:3000/findservers

# Task to do 

1. Node Module with a `findServer()` function which should return a Promise that either: 
     - Resolves with the online server that has the lowest priority number. 
     - Rejects with an error, if no Servers are online. 

2. HTTP GET requests should be used to determine if a server is online or offline additionally the following is required: 
    - All GET requests should be done simultaneously. 
    - A GET request should timeout after 5 seconds. 
    - A server should be considered online if it’s response status code is between 200 and 299. 

- Server Array 
 ``` [
  {
    "url": "http://doesNotExist.boldtech.co",
    "priority": 1
  },
  {
    "url": "http://boldtech.co",
    "priority": 7
  },
  {
    "url": "http://offline.boldtech.co",
    "priority": 2
  },
  {
    "url": "http://google.com",
    "priority": 4
  }
]
 ```


# Output 

![Alt Text](https://github.com/hrkbrahmbhatt/Assignement1/blob/master/gg.gif)
