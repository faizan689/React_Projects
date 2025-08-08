import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data[currency]); 
      })
      .catch((err) => {
        console.error("Currency fetch error:", err);
        setData({});
      });
  }, [currency]);

  return data || {};
}

export default useCurrencyInfo;
