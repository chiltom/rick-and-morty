/** @type {import('tailwindcss').Config} */
/** Content section filled in with index html file
 *  and path for all files that may have components
 *  we want to style
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
