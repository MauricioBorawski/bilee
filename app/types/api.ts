export type ResponseError = {
  code: string;
  message: string;
};

export type ApiResponse<T> = [ResponseError | undefined, T | null];
