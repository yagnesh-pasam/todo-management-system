#todo-app_managemnt

backend/
├── src/
│   ├── config/               # Environment setup & configuration files
│   │   ├── index.ts
│   │   ├── db.config.ts      # Postgres/ORM connection setup
│   │   ├── firebase.config.ts
│   │   └── sns.config.ts
│   │
│   ├── app.ts                # Fastify instance, register routes/plugins
│   ├── server.ts             # App startup file (entry point)
│   │
│   ├── routes/               # Route definitions (each route = one file)
│   │   ├── index.ts          # Combines and exports all routes
│   │   └── user.routes.ts
│   │
│   ├── controllers/          # Handle business logic for each route
│   │   ├── user.controller.ts
│   │   └── auth.controller.ts
│   │
│   ├── services/             # Core logic — interacts with repositories, external APIs
│   │   ├── user.service.ts
│   │   ├── auth.service.ts
│   │   └── email.service.ts  # AWS SNS email logic
│   │
│   ├── repositories/         # Database access layer (ORM)
│   │   ├── user.repository.ts
│   │   └── base.repository.ts
│   │
│   ├── entities/             # ORM entities (models)
│   │   ├── user.entity.ts
│   │   └── index.ts
│   │
│   ├── utils/                # Helper functions (e.g., JWT, encryption)
│   │   ├── logger.ts
│   │   ├── jwt.ts
│   │   └── responseHandler.ts
│   │
│   ├── middlewares/          # Fastify hooks or custom middlewares
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── plugins/              # Fastify plugins registration (e.g., CORS, Swagger)
│   │   ├── cors.plugin.ts
│   │   ├── swagger.plugin.ts
│   │   └── firebase.plugin.ts
│   │
│   ├── types/                # Global TS types/interfaces
│   │   ├── index.d.ts
│   │   └── user.type.ts
│   │
│   ├── constants/            # Common constants & enums
│   │   ├── httpStatus.ts
│   │   ├── messages.ts
│   │   └── roles.ts
│   │
│   └── tests/                # Unit & integration tests
│       ├── user.test.ts
│       └── auth.test.ts
│
├── .env                      # Environment variables
├── .env.example
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
└── README.md
