export default {
  async fetch(request, env, ctx) {
    // This is a minimal worker that just passes requests to the static assets
    return await env.ASSETS.fetch(request);
  }
};

export const config = {
  compatibility_flags: ["nodejs_compat"],
  compatibility_date: "2023-05-18"
}; 