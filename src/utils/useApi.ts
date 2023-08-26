import { useState, useCallback } from "react";

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

async function callApi<T>(
  url: string,
  method: ApiMethod,
  data?: any
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

function useApi<T>() {
  const [apiResponse, setApiResponse] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const call = useCallback(
    async (url: string, method: ApiMethod, data?: any) => {
      try {
        setApiResponse({ ...apiResponse, loading: true, error: null });

        const responseData = await callApi<T>(url, method, data);

        setApiResponse({ data: responseData, error: null, loading: false });
      } catch (error) {
        setApiResponse({
          ...apiResponse,
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    },
    []
  );

  return { apiResponse, call, };
}

export default useApi;
