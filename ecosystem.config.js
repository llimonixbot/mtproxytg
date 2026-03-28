module.exports = {
  apps: [
    {
      name: "mtproxytg",
      script: "npm",
      args: "run serve",
      watch: ["app", "components", "lib", "public"],
      watch_delay: 1000,
      ignore_watch: ["node_modules", "out", ".next"],
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
