import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
	 keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
		fontFamily: {
		  sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
		  serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
		  mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
		  custom: ['"Custom Font"', 'serif'], // Example of a custom font
		},
		gridTemplateColumns: {
		  'gallery': 'repeat(auto-fill, minmax(250px, 1fr))',
		  'gallerian':  'repeat(auto-fill) '
		}
	  },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
