# 🚀 Automated CI/CD Pipeline — Docker + GitHub Actions

A portfolio-ready DevOps project demonstrating an automated CI/CD workflow for a containerized Node.js web application.

## Architecture

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   +----> Install dependencies
   |
   +----> Run automated tests
   |
   v
Docker Build
   |
   v
GitHub Container Registry (GHCR)
   |
   v
Deployable Container Image
```

## DevOps Skills Demonstrated

- Git & GitHub
- CI/CD with GitHub Actions
- Docker containerization
- GitHub Container Registry (GHCR)
- Linux and container concepts
- Automated testing
- Environment variables
- Health-check endpoint
- Docker Compose
- Reproducible deployments

## Application

This project contains a lightweight Node.js web application designed to demonstrate a practical DevOps pipeline.

The application provides:

- A web interface
- A `/health` endpoint
- Automated tests
- Docker containerization
- Automated CI/CD workflow

## Run Locally

### Without Docker

```bash
npm install
npm test
npm start
```

Open:

```text
http://localhost:3000
```

Health check:

```text
http://localhost:3000/health
```

### With Docker

Build the image:

```bash
docker build -t devops-cicd-demo .
```

Run the container:

```bash
docker run -d --name devops-cicd-demo -p 3000:3000 devops-cicd-demo
```

Open:

```text
http://localhost:3000
```

### With Docker Compose

Start:

```bash
docker compose up -d --build
```

Stop:

```bash
docker compose down
```

## CI/CD Workflow

Every pull request to the `main` branch runs automated tests.

Every successful push to `main`:

1. Checks out the repository.
2. Sets up Node.js 20.
3. Installs dependencies.
4. Runs automated tests.
5. Builds the Docker image.
6. Authenticates with GitHub Container Registry.
7. Publishes the Docker image to GHCR.

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── app.js
├── app.test.js
├── docker-compose.yml
└── package.json
```

## DevOps Workflow

```text
Code Push
    |
    v
GitHub
    |
    v
GitHub Actions
    |
    v
Automated Tests
    |
    v
Docker Build
    |
    v
GitHub Container Registry
```

## Future Improvements

This project can be extended with:

- Linux server deployment
- AWS EC2 deployment
- Nginx reverse proxy
- HTTPS with SSL
- Staging and production environments
- Container security scanning
- Monitoring and logging
- Kubernetes deployment
- Infrastructure as Code

## Portfolio Project

This project demonstrates practical DevOps concepts including CI/CD automation, containerization, automated testing, and container image publishing using modern development tools.
