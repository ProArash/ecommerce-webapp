import { LinearProgress } from '@mui/material';

const LoadingPage = () => {
	return (
		<div className="flex w-full">
			<LinearProgress
				sx={{ width: '100%' }}
				variant="indeterminate"
				color="primary"
			/>
		</div>
	);
};

export default LoadingPage;
