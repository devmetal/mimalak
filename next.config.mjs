import { fileURLToPath } from "url";
import createJITI from "jiti";
const jiti = createJITI(fileURLToPath(import.meta.url));

jiti("./src/lib/envs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
