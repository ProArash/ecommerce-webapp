import { ReactNode } from 'react';

const AuthContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-full h-screen justify-between md:p-5">
			<div className="md:flex hidden">some content</div>
			<div className="flex flex-col gap-5 p-5 md:rounded-lg shadow md:w-1/3 w-full h-full justify-center bg-secondary">
				{children}
			</div>
		</div>
	);
};

export default AuthContainer;
