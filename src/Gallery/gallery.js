// import PhotoAlbum from "react-photo-album";

import { useState } from "react";

import "./gallery.css";

import gall1 from '../Images/gall1.jpg';
import gall2 from '../Images/gall2.jpg';
import gall3 from '../Images/gall3.jpg';
import gall4 from '../Images/gall4.jpg';
import gall5 from '../Images/kid.jpg';
import gall6 from '../Images/magic.jpg';


const Albums = [
    { title: "School Event", caption: "Bala blu", photos: [gall1, gall2, gall3, gall4, gall5, gall6, gall2, gall3, gall4, gall5, gall6, gall2, gall3, gall4, gall5, gall6] },
    { title: "House Event", caption: "Bala blu", photos: [gall2, gall3, gall1, gall4, gall5, gall6] },
    { title: "House Event", caption: "Bala blu", photos: [gall2, gall3, gall1, gall4, gall5, gall6] },
    { title: "Church Event", caption: "Bala blu", photos: [gall3, gall1, gall2, gall4, gall5, gall6] },
    { title: "School Event", caption: "Bala blu", photos: [gall1, gall2, gall3, gall4, gall5, gall6] },
    { title: "House Event", caption: "Bala blu", photos: [gall2, gall3, gall1, gall4, gall5, gall6] },
    { title: "Church Event", caption: "Bala blu", photos: [gall3, gall1, gall2, gall4, gall5, gall6] }
]


// Albums.map(album => console.log(album.title));

function Gallery() {


    const [albumDisplay, setAlbumDisplay] = useState(-1);
    const [photoDisplay, setPhotoDisplay] = useState(-1);



    return (
        <div className="Album">

            {
                Albums.map(album => {
                    return (

                        <div className="album-1">
                            {album.photos.slice(0, 3).map(photo => {
                                return (
                                    <div className='photo'>
                                        <img src={photo}
                                            onClick={() => setAlbumDisplay(Albums.indexOf(album))}
                                        />

                                    </div>


                                )


                            })}


                            <h2>{album.title}</h2>
                            <p>{album.caption}</p>
                            {/* <p>{(Albums.indexOf(album)+1)}</p> */}
                        </div>)
                })
            }


            <div className="album-display" style={{ transform: albumDisplay === -1 ? "scale(0)" : "scale(1)" }}>
                <h2 className='close-album' onClick={() => setAlbumDisplay(-1)}>&#10006;</h2>

                {
                    Albums[albumDisplay]?.photos.map(photo => {
                        return (
                            <img src={photo} onClick={() => setPhotoDisplay(Albums[albumDisplay]?.photos.indexOf(photo))} />
                        )
                    })
                }

            </div>

            <div className="photo-display" style={{ transform: photoDisplay === -1 ? "scale(0)" : "scale(1)" }}>
                <h2 className='close-album' onClick={() => setPhotoDisplay(-1)}>&#10006;</h2>

                {
  
                            <img src={Albums[albumDisplay]?.photos[photoDisplay]} />

                }

            </div>


        </div>
    )
    // return <PhotoAlbum layout="rows" photos={photos} />;
};


export default Gallery;