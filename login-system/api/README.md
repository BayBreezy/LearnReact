<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Simple NestJS API showcasing how to use <a href="https://www.better-auth.com/">Better Auth</a> (w/ <a href="https://www.prisma.io/">Prisma</a>)</p>

## NestJS API with Better Auth & Prisma

This project is a simple NestJS API showcasing how to use [Better Auth](https://www.better-auth.com/) with [Prisma](https://www.prisma.io/).

## Included

- [NestJS](https://nestjs.com/)
- [Better Auth](https://www.better-auth.com/)
- [Prisma](https://www.prisma.io/)

## Features

- Auth Configuration
  - Better Auth provides the functionality to login, register etc. Check out the [auth.ts](/src//lib//auth.ts) file for more information.
- Prisma Configuration
  - Prisma is used to interact with the database. Check out the [prisma.service.ts](/src/prisma/prisma.service.ts) file for more information.
- Env Validation
  - A nice feature from NestJS to validate the environment variables. Check out the [env.validation.ts](/src/common/env.validation.ts) file for more information.

## Project setup

Install deps

```bash
npm install
```

Create a copy of the `.env.example` file and rename it to `.env`. Fill in the required values.

```bash
cp .env.example .env
```

## Running the app

```bash
# development
npm run dev
```

## License

This repo is [MIT licensed](/LICENSE.md). Just give it a star ⭐️ if you like it.
