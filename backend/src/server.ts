import Fastify, { FastifyRequest, FastifyReply } from "fastify";

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: "world" });
});

const startServer = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log(`🚀 Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
