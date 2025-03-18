import axios from 'axios';

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const AxiosClient = async <TReq, IErrorResponse, TRes>(
	endpoint: string,
	method: HttpMethod,
	data?: TReq,
	params?: string,
): Promise<TRes | IErrorResponse> => {
	try {
		const req = await axios({
			baseURL: 'http://localhost:3001',
			method,
			url: endpoint,
			data,
			params,
		});

		return req.data as TRes;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			throw error.response.data as IErrorResponse;
		}
		throw {
			message: 'Unexpected error.',
			statusCode: 500,
		} as IErrorResponse;
	}
};
