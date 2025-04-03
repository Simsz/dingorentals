export const onRequest = async ({ request, next, env }) => {
  return await next();
};

export const config = {
  compatibility_flags: ["nodejs_compat"]
}; 