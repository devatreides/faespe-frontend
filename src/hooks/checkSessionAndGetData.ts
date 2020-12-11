import fetcher from '../services/fetcher';
import useSWR from 'swr';

export default function CheckSessionAndGetData(customURL) {
  const { data, error } = useSWR(`/api/${customURL}`, fetcher);
  return {
    response: data ? data.data ?? data : data,
    isLoading: !error && !data,
    isError: error
  };
}
