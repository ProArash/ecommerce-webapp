import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { IErrorResponse } from './IErrorResponse';

export const useCustomMutation = <TResponse, TRequest>(
	mutationFn: (data?: TRequest) => Promise<TResponse>,
): UseMutationResult<TResponse, IErrorResponse, TRequest> => {
	return useMutation<TResponse, IErrorResponse, TRequest>({
		mutationFn,
		onError: (err: IErrorResponse) => {
			console.log('error:', err);
		},
		onSuccess: (res: TResponse) => {
			console.log('success: ', res);
		},
	});
};
