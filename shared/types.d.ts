interface ApiResponseBase {
  success: boolean;
  message: string;
}

// This will only have a data prop if a type is specified for it
export type ApiResponseSuccess<T = never> = ApiResponseBase & {
  success: true;
} & ([T] extends [never] ? { data?: T } : { data: T });

interface ApiResponseFailure extends ApiResponseBase {
  success: false;
}

export type ApiResponse<T = never> = ApiResponseSuccess<T> | ApiResponseFailure;

export interface Tech {
  title: string;
  description: string;
  website: string;
  logo_url: string;
  stack_order: number;
  categories: string;
}
