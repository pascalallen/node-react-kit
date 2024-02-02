# node-react-kit

![GitHub](https://img.shields.io/github/license/pascalallen/node-react-kit)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pascalallen/node-react-kit)

node-react-kit is a fully containerized dev kit designed to get you up and running fast for Node and React development. This kit ships with:

- Docker + Docker configuration
- a Node.js server
- an API built with Express
- Pug template engine
- a React client
- TypeScript
- Webpack
- and helper scripts

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Development Environment Setup

### Clone Repository

```bash
cd <projects-parent-directory> && git clone https://github.com/pascalallen/node-react-kit.git
```

### Bring Up Environment

```bash
bin/up
``` 

You will find the site running at [http://localhost:8080/](http://localhost:8080/)

### Install JavaScript Dependencies

```bash
bin/yarn ci
```

### Compile TypeScript with Webpack

```bash
bin/yarn build
```

### Watch For Frontend Changes

```bash
bin/yarn watch
```

### Take Down Environment

```bash
bin/down
```

### Interact with the Node.js image

```bash
bin/exec <node ./app.js>
```p