import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import '../../assets/styles/global.scss'

import './styles.scss'
interface Photo {
    src: string
    _id: string
}

const Main: React.FC<{}> = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        getPhotosFromServer()
    }, [])
    const getPhotosFromServer = () => {
        api.get('/photos').then((res) => {
            const { docs } = res.data
            setPhotos(docs)
        })
    }
    return (
        <div className="Photos-container">
            {photos.map((photo: Photo) => (
                <div className="Photos-image-container" key={photo._id}>
                    <img src={photo.src} alt="Album" />
                </div>
            ))}
        </div>
    )
}

export default Main
