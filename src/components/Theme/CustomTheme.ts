'use client';
import { createTheme } from '@mui/material';
import localFont from 'next/font/local';

const bYekan = localFont({
	src: '../../assets/fonts/yekan/YekanBakhFaNum-Regular.woff2',
	display: 'swap',
});

export const customTheme = createTheme({
	direction: 'rtl',
	typography: {
		allVariants: {
			fontFamily: bYekan.style.fontFamily,
		},
		body1: {
			fontSize: '18px',
		},
		body2: {
			fontSize: '16px',
		},
		h1: {
			fontSize: '48px',
		},
		h2: {
			fontSize: '40px',
		},
		h3: {
			fontSize: '32px',
		},
		h4: {
			fontSize: '24px',
		},
		caption: {
			fontSize: '14px',
		},
		button: {
			fontSize: '14px',
			textTransform: 'none',
		},
	},
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#4b6cf1',
				},
				error: {
					main: '#ff3131',
				},
			},
		},
	},
});
