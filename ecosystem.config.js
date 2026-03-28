module.exports = {
  apps: [
    {
      name: "mtproxytg",
      script: "npm",
      args: "run serve",
      watch: ["out"],
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "mtproxytg-build",
      script: "npm",
      args: "run build",
      watch: ["app", "components", "lib", "public", "styles"],
      watch_delay: 2000,
      ignore_watch: ["node_modules", "out", ".next"],
      autorestart: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
