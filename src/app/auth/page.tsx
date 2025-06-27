import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { BsArrowRight, BsKey } from 'react-icons/bs';

const AuthPage = () => {
	return (
		<div className="flex w-full h-screen items-center justify-center">
			<Box component={Paper} sx={{ width: '50%', borderRadius: '24px' }}>
				<Box component={'form'} className="flex flex-col gap-5 p-5">
					<Typography>{'ورود به حساب'}</Typography>
					<TextField
						label="موبایل"
						placeholder="09123456789"
						type="tel"
					/>
					<TextField
						label="رمز عبور"
						placeholder="Aa1234567890"
						type="password"
					/>

					<Button variant="contained" startIcon={<BsKey />}>
						{'ورود'}
					</Button>
					<Button variant="outlined" startIcon={<BsArrowRight />}>
						{'ساخت حساب کاربری'}
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default AuthPage;
