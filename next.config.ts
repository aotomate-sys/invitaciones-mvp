/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Evita que ESLint falle el build en Vercel (las advertencias seguirán apareciendo en 'npm run lint')
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
  },
}
export default nextConfig
