'use client';
import { FaArrowRight, FaRocket, FaSpinner } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AuthContainer from './AuthContainer';
import { useCustomMutation } from '../../api/CustomMutation';
import { AuthService } from '../../api/auth/AuthService';
import { ChangeEvent, useState } from 'react';
import { IAuthRequest } from '../../api/auth/IAuth';

const authService = new AuthService();

const AuthInput = () => {
	const [authData, setAuthData] = useState<IAuthRequest>();

	const { isPending, error, mutate } = useCustomMutation(authService.verify);
	const handleLogin = async () => {
		if (authData) {
			mutate(authData);
		}
	};
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAuthData({ [name]: value });
	};

	return (
		<AuthContainer>
			<h3>Sign in to your account</h3>
			<div className="grow" />
			<Input
				name={'email'}
				placeholder="Email address"
				type="email"
				value={authData?.email ?? ''}
				onChange={(e) => {
					handleInput(e);
				}}
			/>
			<Button disabled={isPending} onClick={() => handleLogin()}>
				{isPending && <FaSpinner className="animate-spin" />}
				<span>Get start</span>
				<FaRocket />
			</Button>
			{error && Array.isArray(error.message) ? (
				error.message.map((v, i) => <span key={i}>{v}</span>)
			) : (
				<span>{error?.message}</span>
			)}
			<div className="grow" />
			<Button variant={'outline'}>
				<span>Skip this step</span>
				<FaArrowRight />
			</Button>
		</AuthContainer>
	);
};

export default AuthInput;
