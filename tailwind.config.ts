import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard-Regular"],
      Freesentation: ["Freesentation-9Black"],
      SDSamliphopangche: ["SDSamliphopangche_Basic"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
