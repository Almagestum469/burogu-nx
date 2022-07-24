// Middleware handlers will run on every request before any other server route to add check and some headers, log requests, or extend the event's request object.

// Middleware handlers should not return anything (nor close or respond to the request) and only inspect or extend the request context or throw an error.

export default defineEventHandler((event) => {
  event.context.auth = { user: 123 };
});
