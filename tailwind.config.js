/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SecondSectionC: "#141A24",
        AsideFooterC: "#262F3C",
        InstallationC: "#0178FF",
      },
    },
  },
  plugins: [],
};
