import { IAuthRequest, IAuthResponse } from './IAuth';
import { IAuthService } from './IAuthService';
import { AxiosClient } from '../AxiosClient';
import { ApiRoutes } from '../../utils/ApiRoutes';
import { IErrorResponse } from '../IErrorResponse';

export class AuthService implements IAuthService {
	async signIn(data?: IAuthRequest): Promise<IAuthResponse> {
		const response = await AxiosClient<
			IAuthRequest,
			IErrorResponse,
			IAuthResponse
		>(ApiRoutes.auth, 'POST', data, undefined);
		return response as IAuthResponse;
	}

	async verify(data?: IAuthRequest): Promise<IAuthResponse> {
		const response = await AxiosClient<
			IAuthRequest,
			IErrorResponse,
			IAuthResponse
		>(ApiRoutes.verify, 'POST', data, undefined);
		return response as IAuthResponse;
	}
}
