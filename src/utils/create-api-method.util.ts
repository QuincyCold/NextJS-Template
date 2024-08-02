/**
 * Type definition for options to create an API method.
 *
 * @description This type defines the options for creating an API method, including the URL, HTTP method, and optional headers.
 * @param url - The URL of the API endpoint.
 * @param method - The HTTP method to use for the request.
 * @param headers - Optional headers to include in the request.
 * @param nextConfig - Optional configuration for the request (revalidate tag or is revalidate after an amount of milliseconds or not).
 */
export type CreateAPIMethodOptions = {
    url: string;
    method: 'GET' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: Record<string, string>;
    nextConfig?: NextFetchRequestConfig;
};

/**
 * Type definition for the body of an API method.
 *
 * @description This type defines the body of an API method as an object with string keys and unknown values.
 * @note If you use any method other than 'GET', 'HEAD', 'OPTIONS', 'CONNECT', or 'TRACE', use this type to define the request body.
 */
export type ApiMethodBody = Record<string, unknown>;

/**
 * Type definition for creating an API method.
 *
 * @description This type allows for creating a flexible API method that can be used with different HTTP methods and custom headers.
 * @template TInput - The type of the request body. Defaults to an object with string keys and unknown values.
 * @template TOutput - The type of the response body. Defaults to unknown.
 * @param opts - Options for configuring the API method.
 * @param body - Optional request body to include in the request.
 * @returns A promise of the response object include data, statusCode and errMsg (if the error occur).
 */
export type CreateAPIMethod = <TInput extends ApiMethodBody = ApiMethodBody, TOutput = unknown>(
    opts: CreateAPIMethodOptions,
) => (body?: TInput) => Promise<{
    data: TOutput | null;
    statusCode: number;
    errMsg?: string;
}>;

/**
 * Creates an API method based on the provided options.
 *
 * @description This function creates a reusable API method. It configures the HTTP request with the specified URL, method, and headers.
 *              For 'POST' and 'PATCH' methods, it includes the request body as JSON. It handles errors by returning a null data value and an error message.
 * @note Any fetch should be done in the server side to avoid CORS issue.
 * @template TInput - The type of the request body. Defaults to an object with string keys and unknown values.
 * @template TOutput - The type of the response body. Defaults to unknown.
 * @param opts - Options for configuring the API method.
 * @returns A function that takes an optional request body and returns a promise of the response object include data, statusCode and errMsg (if the error occur).
 * @example Any method not requiring a body:
 * ```ts
 * import { Blog } from '@/types'; // The defined response data type that you expected.
 * import { ApiMethodBody, createAPIMethod } from '@/utils';
 *
 * const getBlogsMethod = createAPIMethod<ApiMethodBody, Blog[]>({
 *    url: 'https://example.com/api/blogs',
 *    method: 'GET',
 * });
 *
 * const { data: blogs, statusCode: blogStatusCode, errMsg: blogErrMsg } = await getBlogsMethod();
 * ```
 *
 * @example Any method requiring a body:
 * ```ts
 * import { CreateBlogRequest, CreateBlogResponse } from '@/types'; // The defined response data type that you expected.
 * import { createAPIMethod } from '@/utils';
 *
 * const createBlogMethod = createAPIMethod<CreateBlogRequest, CreateBlogResponse>({
 *    url: 'https://example.com/api/blogs',
 *    method: 'POST',
 * });
 *
 * const { data: createdBlog, statusCode: createBlogStatusCode, errMsg: createBlogErrMsg } = await createBlogMethod({
 *    title: 'New Blog',
 *    content: 'This is a new blog',
 *  });
 * ```
 */
export const createAPIMethod: CreateAPIMethod =
    (opts: CreateAPIMethodOptions) => async (body?: ApiMethodBody) => {
        try {
            const response = await fetch(opts.url, {
                method: opts.method,
                headers: {
                    'Content-Type': 'application/json', // Default content type
                    ...opts.headers,
                },
                body:
                    ['GET', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'].includes(opts.method) ||
                    body === undefined
                        ? undefined
                        : JSON.stringify(body),
                next: opts.nextConfig,
            });

            const result = await response.json();

            return {
                data: response.ok ? result : null,
                statusCode: response.status,
                errMsg: response.ok ? undefined : result.message,
            };
        } catch (error) {
            return {
                data: null,
                statusCode: 500,
                errMsg: error instanceof Error ? error.message : 'Unknown error occurred',
            };
        }
    };
