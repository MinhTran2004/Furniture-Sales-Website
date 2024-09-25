import { log } from "console";
import { useEffect, useState } from "react";

export default function Main() {

    const [data, setData] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, [data]);


    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div> 
            <p>{data.length}</p>
        </div>
    )
}