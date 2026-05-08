import axios from "axios";
import { useEffect, useState } from "react";

export function useGeocode(address){
    const [coords, setCoords] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!address) return ;

        setLoading(true)
        setCoords(null)
        setError(null)

        axios.get("https://nominatim.openstreetmap.org/search", {
            params:{
                q:address,
                format:"json",
                limit:1
            }
        })
        .then((res) => {
            const data = res.data
            if(data[0]){
                setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)])
            }
            else{
                setError("There is no any adrres!")
            }
        })
        .catch(() => {
            setError("Tarmoq xatosi")
        })
        .finally(() => {
            setLoading(false)
        })


        
    }, [address])

    return {coords, loading, error}
}