import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import releaseCarousel from '../../public/json/releaseCarousel'

const fullAlbumPage = (props) => {
    const router = useRouter()
    console.log(router)
    return (
        <div className="fullPage">
            <Header />
            <div className="col">
                <h1>{router.query.fullAlbumPage}</h1>
            </div>
        </div>

      );
}
 
export default fullAlbumPage;