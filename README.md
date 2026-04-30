# Express Template

[Link to Front end](#)<br/><br/>
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-A9792B?logo=theodinproject&logoColor=fff)](#)

## Overview

This is a project from [The Odin Project](https://theodinproject.com): [Project: ](#).

## Tech Stack

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- [![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
- [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
- [![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white)](#)
- [![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](#)
- [![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=000)](#)
- [![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff)](#)

## API Documentation

### XXX Routes

```sh
GET /
```

- Returns all available images

### XXX Routes

```sh
GET /xxx
```

- XXX

## Project Structure

```sh
backend/
│
├── prisma/
│   │
│   ├── migrations/
│   └── schema.prisma
│   └── seeder.js
│   │
├── src/
│   │
│   ├── controllers/
│   │   ├── game.controller.js
│   │   └── leaderboards.controller.js
│   │
│   ├── routes/
│   │   ├── game.routes.js
│   │   └── leaderboards.routes.js
│   │
│   ├── services/
│   │   ├── game.services.js
│   │   ├── characters.services.js
│   │   └── leaderboards.services.js
│   │
│   ├── config/
│   │   ├── passport.js
│   │   └── prisma.js
│   │   └── supabase.js
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env
└── .prettierrc
└── eslint.config.js
└── prisma.config.js


```

## Getting Started

### Prerequisites

You will need to install the latest version of npm, have PostgreSQL set up, to get started on using this project

- npm

```sh
npm install npm@latest -g
```

- [PostgreSQL setup](https://www.theodinproject.com/lessons/nodejs-using-postgresql)

### Installation

Getting started on running the webpack server to your localhost, localhost:3000

1. Cloning the repository

```sh
git clone git@github.com:JohnFerrancol/photo-tagging.git
```

2. Set up the local environment and fill in DATABASE_URL and Supabase information

```sh
cp .env.example .env
```

3. Build the Application

```
npm run build
```

6. Running the Express server

```sh
npm run start
```

4. Open in web browser via: http://localhost:3000

## Roadmap

- [ ] XXX
- [ ] XXX
