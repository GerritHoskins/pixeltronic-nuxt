import { FetchOptions } from 'ofetch';

export const usePerformFetch = async (
  endpoint: string,
  options: { method: string; data: unknown; headers: Record<string, string>; params: unknown }
) => {
  const config = useRuntimeConfig();

  const requestHeaders = options.headers || {
    'Content-Type': 'application/json',
  };

  const requestOptions: FetchOptions = {
    method: options.method,
    headers: { ...requestHeaders },
    body: options.method === 'POST' ? { ...options.data } : undefined,
    params: { ...options.params },
  };

  let response = null;
  try {
    response = await $fetch(`${config.public.apiURL}${endpoint}`, requestOptions);

    if (!response) {
      throw new Error('Empty response');
    }
  } catch (e) {
    console.error(`Error while fetching ${endpoint}:`, e);
    throw e;
  }

  return {
    response,
  };
};
