import { useState, useEffect } from "react";
import axios from "axios";

export default function useGET(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        // Optionally handle error
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

  return data;
}
