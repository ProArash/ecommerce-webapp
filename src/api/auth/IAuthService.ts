import { IAuthRequest, IAuthResponse } from './IAuth';

export interface IAuthService {
	signIn(data?: IAuthRequest): Promise<IAuthResponse>;
	verify(data?: IAuthRequest): Promise<IAuthResponse>;
}
