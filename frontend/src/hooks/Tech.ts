import useSWR from "swr";

import { ApiResponse, Tech } from "../../../shared/types";

const fetcher = async <T = never>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: { "content-type": "application/json" },
    });

    const responseBody = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: `API call returned unsuccessfully: ${responseBody?.message}`,
      };
    }

    return responseBody as ApiResponse<T>;
  } catch (error) {
    console.log(JSON.stringify({ message: `Api call failed: ${url}`, error }));
    return {
      success: false,
      message: `API call failed: ${url}`,
    };
  }
};

export const useTech = () => {
  const { data: response, error } = useSWR<ApiResponse<Tech[]>>(
    `http://localhost:3001/tech/`,
    fetcher,
  );

  const data = response?.success ? response.data : [];

  return {
    tech: data,
    isLoading: !error && !data,
    isError: error || (response && !response?.success),
  };
};
