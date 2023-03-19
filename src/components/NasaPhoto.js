import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();


        async function fetchPhoto() {
            const res = await fetch(
                `http://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }

}, []);

if(!photoData) return <div  />;


return (
    <>
    <NavBar />
    <div>
        {photoData.media_type === "image" ? (
        <img 
            src={photoData.url}
            alt={photoData.title}
        />
        ) : (
            <iframe 
            title="space-video"
            src={photoData.url}
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
            />
        )}
        <div>
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
        
        </div>
    </div>
    </>
        )
    }
