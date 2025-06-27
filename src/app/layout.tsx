import type { Metadata } from 'next';
import './globals.css';
import CustomAppProvider from '../components/Providers/CustomAppProvider';

export const metadata: Metadata = {
	title: 'Ecommerce | فروشگاه',
	description: `فروشگاه اینترنتی، خرید انواع محصول و تحویل درب منزل.
	توسعه داده شده با NextJS و NestJS`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="rtl">
			<body className={`antialiased`}>
				<CustomAppProvider>{children}</CustomAppProvider>
			</body>
		</html>
	);
}
