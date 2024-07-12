import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, [url]);

    return { data, loading, error, refetch: fetchData }
}
 
export default useFetch;