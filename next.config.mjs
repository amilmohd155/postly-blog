import { build } from "velite";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config) => {
  //   config.plugins.push(new VeliteWebpackPlugin());
  //   return config;
  // },
};

export default nextConfig;

// class VeliteWebpackPlugin {
//   static started = false;
//   apply(/** @type {import('webpack').Compiler} */ compiler) {
//     // executed three times in nextjs
//     // twice for the server (nodejs / edge runtime) and once for the client
//     compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
//       if (VeliteWebpackPlugin.started) return;
//       VeliteWebpackPlugin.started = true;
//       const dev = compiler.options.mode === "development";
//       await build({ watch: dev, clean: !dev });
//     });
//   }
// }
