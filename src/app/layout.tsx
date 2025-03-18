import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import CustomThemeProvider from '../components/Theme/CustomThemeProvider';

import CustomQueryClientProvider from '../components/QueryClient/CustomQueryClientProvider';

const poppins = Poppins({
	subsets: ['latin'],
	weight: '500',
});

export const metadata: Metadata = {
	title: 'Libre shop',
	description: 'E-Commerce Webapp by @ProArash',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<CustomQueryClientProvider>
					<CustomThemeProvider
						attribute={'class'}
						enableSystem
						defaultTheme="system"
						disableTransitionOnChange
					>
						{children}
					</CustomThemeProvider>
				</CustomQueryClientProvider>
			</body>
		</html>
	);
}
