## Backend for #VidTube

- Inspired by YouTube.
- Building only the backend part such one can integrate with any frontend of web or mobile.
- Here's the [database design](https://app.eraser.io/workspace/2JOipuOeLZqxKScKSjsD?origin=share&elements=IE42339bxxMsnXXXZxEktw) for the project.
- The tech stack used is NodeJS, ExpressJS and MongoDB.
- There are few other devDependencies used for development purpose.
- The project is developed by [A Vidhan Reddy](https://github.com/AVidhanR)

## Packages used

### `cors`

- The Cross-Origin Resource Sharing (CORS) package is a browser-based HTTP header mechanism that **allows a server or API to indicate which origins can access and load resources**. CORS can be used for a number of purposes, including:
  - Security:
    CORS helps prevent malicious websites from accessing sensitive information on your server.
  - Resource sharing:
    CORS allows controlled access to resources on a server from a different origin, enabling web applications to make API requests to external services.
  - Relaxing browser restrictions:
    CORS can relax the guard that internet browsers typically deny access to unknown websites.
  - Exercising more control:
    CORS allows you to exercise more control over which websites should be allowed access to your server's resources

```bash
npm i cors
```

### `mongoose-aggregate-paginate-v2`

- The mongoose-aggregate-paginate-v2 package for Mongoose **allows users to paginate results at a specific placeholder stage in a pipeline, instead of at the end**. This can be useful when working with large datasets and wanting to paginate before performing expensive operations, such as $lookup or $unwind.
- The package also includes customizable labels.

```bash
npm i mongoose-aggregate-paginate-v2
```

### `bcrypt`

- The bcrypt package is a password-hashing function that is **used to hash passwords**. It is a one-way hash function that converts passwords into a string of characters that cannot be reversed. This means that the original password cannot be retrieved from the hash.

```bash
npm i bcrypt
```

### `jsonwebtoken`

- JWTs (JSON Web Tokens) are **secure ways to send information between parties**. They are like little packages with three parts: header, data, and a signature to ensure authenticity. The jsonwebtoken package in Node.js helps you create and verify JWTs. It signs data with a secret key, making them tamper-proof. JWTs are useful for authentication, authorization, and sharing information securely.

```bash
npm i jsonwebtoken
```

### `mongoose`

- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. It is a **MongoDB object modeling tool that provides a schema-based solution to model your application data**. It includes built-in type casting, validation, query building, business logic hooks, and more, out of the box.

```bash
npm i mongoose
```
