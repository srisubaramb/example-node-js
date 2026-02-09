# Understanding Backend Fundamentals with Node.js

## Day 0 – Node.js Core

### Topics Covered

- Request–response lifecycle
- Project initialization (npm, package.json)
- Creating an HTTP server
- Ports and server listening
- HTTP methods (GET)
- Method-based routing
- URL parsing using the URL object
- Pathname and query parameters
- Control flow using URL data
- API testing using Postman

## Day 1 – Docker Fundamentals

### Topics Covered

- Why Docker is used
- Docker images and containers
- Docker on Ubuntu (VM)
- Docker image layers
- Core Docker commands (build, images, ps, run)
- Port mapping in Docker
- Ubuntu VM vs Windows host access
- Containerization of a Node.js backend app
- Backend apps listen on ports; Docker forwards traffic
- `EXPOSE` documents ports but does not publish them

## Day 2 - Docker Volumes and container shell

### Topics Covered

- what is volumes in docker and their uses
- Containers are ephemeral; volumes are required for persistence
- Types of volumes and their perfect use cases
- Working with bind mount (live code sync during development)
- Working with named volumes (data persistence across container restarts)
- Anonymous volumes in Docker (-v /app/node_modules)
  (protect dependencies from being overwritten by bind mounts)
- testing out live volumes for dev
- exec command in container
- debug why container is not running with the help of logs
- dangling images (unused / old image layers)
- Intro to Docker Compose
  (solves long docker run commands, makes multi-container setups reproducible)

## Day 3 – MongoDB + Node.js

### Topics Covered

- MongoDB architecture basics (database, collections, documents)
- Connecting MongoDB with Node.js
- MongoDB tools: MongoDB Driver, mongosh, MongoDB Compass
- Asynchronous database operations in Node.js
- MongoDB URI (connection string) and its importance
- Module system in Node.js (CommonJS vs ESM)
- Working with file paths in Node.js
- Basic MongoDB CRUD operations (insert, find, update, delete)
