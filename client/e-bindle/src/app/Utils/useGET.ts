/* eslint-disable @typescript-eslint/no-explicit-any */
// app/Utils/useGET.ts
import { useState, useEffect } from "react";
import axios from "axios";

export default function useGET<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<T>(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
