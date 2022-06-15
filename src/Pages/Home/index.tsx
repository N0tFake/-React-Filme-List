import { useState } from "react";
import { Link } from "react-router-dom";
import { CardFilm } from "../../Components/Card";
import { SearchBar } from "../../Components/Search";
import { useAuth } from "../../Context/auth";

export function HomePage () {
    const context = useAuth()
    
    const [film, setFilm] = useState<any>(null);
    const [seachFilm, setSeachFilm] = useState<string>('');
    const onChange = (str: string) => {
        setSeachFilm(str);
    }

    const key = process.env.REACT_APP_API_KEY;
    
    async function handleGetFilm(title: string) {
        const url = `http://www.omdbapi.com/?apikey=${key}&s=${title}`;
        await fetch(url).then(response => response.json()).then(data => setFilm(data['Search']));
    }
    
    function handleLogout(){
        context.Logout()
    }

    return (
        <>
        <nav>
            <button onClick={handleLogout}>To Back</button>
        </nav>
            <SearchBar value={seachFilm} onClick={() => handleGetFilm(seachFilm)} onChange={onChange} />
            <CardFilm film={film} />
        </>
    );
}