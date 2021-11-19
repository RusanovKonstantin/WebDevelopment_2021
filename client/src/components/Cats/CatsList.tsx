import React, {useState, useEffect} from 'react'
import { getCats, Cat as ICat } from '../../api/catsApi';
import Cat from './Cat'
import { CircularProgress } from "@material-ui/core";

export default function CatsList() {

    const [cats, setcats] = useState<ICat[]>([]);
    
    useEffect(() => {
        const getData = async () =>{
            const cats = await getCats();
            setcats(cats);           
        }
        getData();
       }, [])

    return (
        <div>
            <h1>Cats List</h1>
            { cats.length > 0 ?
                cats.map((cat: ICat) => {
                    console.log(cat);
                    return <Cat cat={cat} extra={"live"} key={cat.name}/>
                })
                : <h3>Loading <CircularProgress /></h3> 
        }
        </div>
    )
}