/* eslint-disable no-unused-vars */
import { API_TIMEOUT, BASE_URL, USER } from '@/config/http';
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

// eslint-disable-next-line no-shadow
export enum EnumContentType {
	JSON = 'application/json',
	XML = 'application/xml',
	FORM = 'application/x-www-form-urlencoded',
}

// get access_token
const accessToken = Cookies.get(USER.TOKEN);

// const token = asset_token && JSON.parse(asset_token).data

class HttpApiService 
{
	private _axiosInstance: AxiosInstance | undefined;
	private _token: string | null;
	constructor() 
	{
		this._token = null;

		this.createAxiosInstance();
	}

	private defaultOptions = (): any => 
	{
		// Set the AUTH token for any request

		const authHttpHeader = `Bearer ${accessToken}`; // Token goes here

		this._token = authHttpHeader;

		const options = {
			baseURL : BASE_URL,
			// withCredentials: true, // Window Authentification
			headers : {
				Authorization  : this._token,
				'content-type' : EnumContentType.JSON
				// Accept: 'application/json',
				// 'Authorization': `${authHttpHeader}` // OAuth Authetification
			},
			timeout : API_TIMEOUT
		};
		
		return options;
	};

	/**
   * Create instance
   */
	private createAxiosInstance() 
	{
		this._axiosInstance = axios.create(this.defaultOptions());

		// Add a request interceptor
		this._axiosInstance.interceptors.request.use(
			(config) => config,
			(error) => 
			{
				return Promise.reject(error);
			}
		);

		// Add a response interceptor
		this._axiosInstance.interceptors.response.use(
			this.handleSuccess,
			this.handleError
		);
	}

	protected getToken() 
	{
		return this._token;
	}

	protected get(endpoint: string, conf = {}): AxiosPromise
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.get(`${endpoint}`, conf)
				.then((response) => 
				{
					resolve(response.data);
				})
				.catch((error) => 
				{
					reject(error);
				});
		});
	}

	protected create(endpoint: string, data: any, conf = {}): AxiosPromise 
	{
		return this.post(endpoint, data, conf);
	}

	protected post<T>(endpoint: string, data: any, conf = {}): AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.post<T>(`${endpoint}`, data, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error) => 
				{
					reject(error.response.data.error);
				});
		});
	}
	protected customPost(endpoint: string, conf = {}): AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.post(`${endpoint}`, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error) => 
				{
					reject(error);
				});
		});
	}

	protected put(endpoint: string, data: any, conf = {}): AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.put(`${endpoint}`, data, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error) => 
				{
					reject(error);
				});
		});
	}

	protected customUpdate(endpoint: string, data: any, conf = {}): AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.patch(`${endpoint}`, data, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error) => 
				{
					reject(error);
				});
		});
	}

	protected delete(endpoint: string, id: string | number, conf?: AxiosRequestConfig | undefined)
	: AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.delete(`${endpoint}/${id}`, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error: any) => 
				{
					reject(error);
				});
		});
	}

	protected deleteFile(endpoint: string, conf = {}): AxiosPromise 
	{
		return new Promise((resolve, reject) => 
		{
			this._axiosInstance!.delete(`${endpoint}`, conf)
				.then((response) => 
				{
					resolve(response);
				})
				.catch((error) => 
				{
					reject(error);
				});
		});
	}

	handleSuccess(response: AxiosResponse) 
	{
		return response;
	}

	handleError = (err: any) => 
	{
		if (!err.response) 
		{
			// eslint-disable-next-line no-console
			console.log(`Network error: ${err}`);
		}
		else 
		if (err.response !== undefined) 
		{
			const { status } = err.response;

			if (status === 401 || status === 403) 
			{
				window.location.href = '/auth/login';
				// eslint-disable-next-line no-console
				console.log(
					`HttpService::Error(401 or 500) : ${err.response.data.Message}`
				);
			}
			if (status === 500) 
			{
				// eslint-disable-next-line no-console
				console.log(
					`HttpService::Error(401 or 500) : ${err.response.data.Message}`
				);
			}
		}
		
		return Promise.reject(err);
	};

	redirectTo = (document: Document, path: string) => 
	{
		document.location = path;
	};
}

export default HttpApiService;
