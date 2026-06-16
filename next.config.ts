import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Domaines distants autorisés pour next/image (à compléter selon les sources).
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
