const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        status: "healthy",
        service: "devops-cicd-demo"
      })
    );
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>DevOps CI/CD Demo</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 900px;
          margin: 70px auto;
          padding: 24px;
          line-height: 1.6;
        }

        .card {
          padding: 28px;
          border: 1px solid #ddd;
          border-radius: 16px;
        }

        code {
          background: #f3f3f3;
          padding: 3px 7px;
          border-radius: 6px;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>🚀 DevOps CI/CD Demo</h1>

        <p>
          This application is containerized with Docker and designed
          for automated CI/CD with GitHub Actions.
        </p>

        <p>
          <strong>Status:</strong> Running
        </p>

        <p>
          <strong>Health endpoint:</strong>
          <code>/health</code>
        </p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
