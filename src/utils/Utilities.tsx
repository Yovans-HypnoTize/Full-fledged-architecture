export const getBaseUrl = (): string => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    console.log(baseUrl)
  
    if (!baseUrl) {
      throw new Error('VITE_API_BASE_URL is not defined in environment variables');
    }
  
    return baseUrl;
  };