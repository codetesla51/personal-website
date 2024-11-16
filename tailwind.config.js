'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/** @type {import('tailwindcss').Config} */
exports.default = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#111111',
				bgsec: '#0a0a0a',
				acc: '#008afa',
				tx: '#fff',
				dark: '#111111',
				br: '#b6b1ae'
			},
			fontFamily: {
				kink: ['Kanit', 'sans-serif'] 
			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem'
			},
			spacing: {
				18: '4.5rem',
				72: '18rem',
				84: '21rem',
				96: '24rem'
			},
			borderRadius: {
				lg: '0.5rem',
				xl: '1rem'
			}
		}
	},
	plugins: []
};
