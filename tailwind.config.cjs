/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#050812",
        panel: "rgba(15, 23, 42, 0.75)",
        line: "rgba(148, 163, 184, 0.18)",
        primary: "#2563eb",
        accent: "#38bdf8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(37, 99, 235, 0.28)",
        card: "0 18px 60px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};
