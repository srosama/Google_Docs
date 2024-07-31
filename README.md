<div align="center">
  <div>
    <h1>📄 Google_Docs</h1>
    <p>
    Collaborative document editing platform
    This project will demonstrate real-time updates using WebSockets, handle asynchronous operations,
    and structure the application using OOP principles where necessary.
    </p>
    <br>
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="Node.js" />
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="Express" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB" /> 
    <br/>
    <img src="https://img.shields.io/badge/-Socket.IO-black?style=for-the-badge&logoColor=white&logo=socket.io&color=010101" alt="Socket.IO" />
    <img src="https://img.shields.io/badge/-JWT-black?style=for-the-badge&logoColor=white&logo=json-web-tokens&color=000000" alt="JWT" />
    <img src="https://img.shields.io/badge/-React_Router-black?style=for-the-badge&logoColor=white&logo=react-router&color=CA4245" alt="React Router" />
    <br/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://shields.io/badge/react-black?logo=react&style=for-the-badge" alt="reactjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## Key Features
* User Authentication: Implement user registration and login using JWT for authentication.
* Real-Time Collaboration: Use WebSockets to allow multiple users to edit a document in real-time.
* Document Management: CRUD operations for documents.
* Event Loop and Async Programming: Handle I/O operations efficiently and use async/await for managing asynchronous tasks.
* Error Handling: Robust error handling and logging.
* Database Integration: Use MongoDB for storing user and document data.
* Security: Implement basic security practices such as input validation, sanitization, and protection against common vulnerabilities (e.g., XSS, CSRF).


# Project Screenshots & Details  
<details>
  <summary>Auth</summary>
  <br>
  <p>Description of the Auth screen.</p>
</details>


## Quick Links 
###  [Prerequisites](#prerequisites)
###  [Get Started](#get-started)
###  [Tech Stack](#tech-stack)
###  [Project Development Rules](#project-development-rules)
###  [Features](#features)

## Key Requirements
* File Organization
* online editing 
* Collaboration (real-time)
* Sharing and permissions

## Hight Level Design 
* Storage and Formatting
* Concurrency -> collaborative editing: (CRDTs) and (OT) algorithms
* Access Control -> (RBAC)
* authentication and authorization
* CRUD 
* Monitoring and Observability -> metrics, logs, and trace data 

## Challenges 
* allowing multiple users to edit the same document without conflicting changes -> (OT)
* ensuring that simultaneous edits are effectively merged without causing issues -> Collaborative protocol

# Technology Stack


## Frontend  
#### * React.js
#### * React-router.js
#### * Tailwind CSS
#### * quilljs
#### * Shadcn 
#### * TypeScript 
#### * Vite 



## Backend 
#### * Node.js
#### * Express.js
#### * MongoDB
#### * WebSockets 
#### * JWT/OAuth
#### * TypeScript 
#### * Docker 


## Infrastructure
#### * cloudflare stack 
#### * prometheus
#### * CI/CD with GitHub Actions
#### * Microservices Architecture: scalability and maintainability.
#### * API Gateway (NGINX): To manage and route microservices.
#### * Nginx for Reverse Proxy: To handle IP address management and routing on Cloudflare.
#### * API Documentation (Swagger): For documenting RESTful APIs.
#### * Component Documentation (Storybook): For documenting and showcasing frontend components.