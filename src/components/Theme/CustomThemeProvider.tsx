'use client';
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

const CustomThemeProvider = ({
	children,
	...props
}: React.ComponentProps<typeof ThemeProvider>) => {
	const [mount, setMount] = useState<boolean>(false);
	useEffect(() => {
		setMount(true);
	}, [mount]);
	if (!mount) return null;
	return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
