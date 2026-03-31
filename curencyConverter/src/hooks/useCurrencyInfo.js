import { useState, useEffect } from "react"

export function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/f43bc7672fb6397bceea35d0/latest/${currency}`)
            .then(res => res.json())
            .then((data) => setData(data.conversion_rates))
            .catch(err => console.log(err))
        console.log("data", data);

    }, [currency])
    console.log(data);
    return data
}
