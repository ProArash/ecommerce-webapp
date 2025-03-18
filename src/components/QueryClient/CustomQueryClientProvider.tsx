'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

const CustomQueryClientProvider = ({ children }: { children: ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default CustomQueryClientProvider;
