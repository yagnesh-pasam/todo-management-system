# todo-app_management — Backend (Fastify + TypeScript)

A clean, modular, and production-ready backend for a **To-Do Management** application built with **TypeScript**, **Fastify**, **Postgres**, **TypeORM**, **AWS (S3 & SNS)**, and **Firebase**. Includes modern dev tooling (ESLint, Prettier, Husky + lint-staged), secure auth (bcrypt + JWT), and real-time push notifications.

---

## Table of contents

1. [What is this](#what-is-this)
2. [Tech stack](#tech-stack)
3. [Features](#features)
4. [Repository structure](#repository-structure)
5. [Quickstart](#quickstart)
6. [Environment variables](#environment-variables)
7. [Scripts](#scripts)
8. [Dev workflow & Git hooks](#dev-workflow--git-hooks)
9. [Deployments](#deployments)
10. [API overview](#api-overview)
11. [Notes & recommendations](#notes--recommendations)
12. [License](#license)

---

## What is this

This backend provides RESTful endpoints to manage users, tasks and subtasks with the following concerns addressed:

* Type-safe server with Fastify + TypeScript
* Relational DB using PostgreSQL + TypeORM
* File attachments uploaded to AWS S3 (secure access)
* Push notifications via Firebase Cloud Messaging and AWS SNS (email)
* Secure user authentication (bcrypt + JWT)
* CI-friendly dev tooling (linters, formatters, pre-commit hooks)

---

## Tech stack

* Language: **TypeScript**
* Server: **Fastify**
* Database: **PostgreSQL** (TypeORM)
* File storage: **AWS S3**
* Notifications: **Firebase Cloud Messaging**, **AWS SNS**
* Dev tooling: **ESLint**, **Prettier**, **Husky**, **lint-staged**
* Testing: your choice (Jest recommended)
* Deployment: **AWS EC2** (or containerized solution)

---

## Features

Core ToDo functionality:

* User registration & login
* Secure password storage (bcrypt)
* JWT-based authentication (access & optional refresh tokens)
* Create, read, update, delete tasks & subtasks
* Task dates and history (created/updated timestamps)
* Attach/Upload files (images, docs, PDFs) to tasks/subtasks — stored in S3
* Filter tasks by status, dates or user
* Push notifications when a task is created or updated (FCM + SNS)
* Modular folder structure and separation of concerns (controllers/services/repositories)

---

## Repository structure

(important folders shown — full tree in repo)

```
backend/
├── src/
│   ├── config/
│   │   ├── db.config.ts
│   │   ├── firebase.config.ts
│   │   └── sns.config.ts
│   ├── app.ts
│   ├── server.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── entities/
│   ├── utils/
│   ├── middlewares/
│   ├── plugins/
│   ├── types/
│   ├── constants/
│   └── tests/
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md
```
# 🧱 Naming Conventions

To maintain consistency and readability across the backend codebase, follow the naming conventions below.

| Entity Type      | Naming Style                | Example              |
| ---------------- | --------------------------- | -------------------- |
| **Folder name**      | lowercase                   | `controllers`        |
| **File name**        | lowercase.dot-separated     | `user.controller.ts` |
| **Class name**       | PascalCase                  | `UserController`     |
| **Variable name**    | camelCase                   | `userName`           |
| **Method name**      | camelCase                   | `getUserData()`      |
| **Constant**         | UPPER_CASE_WITH_UNDERSCORES | `API_KEY`            |
| **Interface / Type** | PascalCase                  | `User`, `UserRole`   |

---
