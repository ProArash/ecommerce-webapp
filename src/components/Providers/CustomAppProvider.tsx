'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ReactNode, useEffect, useState } from 'react';
import { customTheme } from '../Theme/CustomTheme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

const rtlCache = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

const CustomAppProvider = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
	}, [mounted]);
	if (!mounted) return null;
	return (
		<AppRouterCacheProvider>
			<CacheProvider value={rtlCache}>
				<ThemeProvider theme={customTheme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</CacheProvider>
		</AppRouterCacheProvider>
	);
};

export default CustomAppProvider;
