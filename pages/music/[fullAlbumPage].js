import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import releaseCarousel from '../../public/json/releaseCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faBandcamp, faYoutube, faItunes} from '@fortawesome/free-brands-svg-icons'

const fullAlbumPage = (props) => {
    const router = useRouter()

    const albumName = router.query.fullAlbumPage;

    const iconRef = {"faSpotify": faSpotify, "faBandcamp":faBandcamp, "faYoutube":faYoutube, "faItunes":faItunes}
    const dataArr = Object.keys(releaseCarousel).map(key => releaseCarousel[key])

    for(const item in dataArr){
        if(dataArr[item].title === albumName){
            const sc = dataArr[item];
            var title = sc.title
            var pic = sc.pic;
            var spotify = sc.links['spotify'].link
            console.log(spotify)
            var links = Object.keys(sc.links).map(i =>{
                const iconName = sc.links[i]['icon'];
                  return(
                      <a
                      className="link-icon" 
                      href={sc.links[i]['link']} 
                      style={{
                          "backgroundColor":sc.links[i]['color'],
                           "flexGrow":sc.links[i]['fg']}}
                      >
                        <FontAwesomeIcon icon={iconRef[iconName]}></FontAwesomeIcon>
                      </a>
                  )
                })

        }
    }

    return (
        <div>
            <Header />
            <div className="full-page album-page">
                <div className="col">
                    <div className="album-box-1">
                        <h1>{title}</h1>
                        <img src={pic}></img>
                        <div className="sub-box wrap-row">
                            {links}
                        </div>
                    </div>
                    <div className="album-box-2">
                        {/* {spotify} */}
                    <iframe src={spotify} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        </div>

      );
}
 
export default fullAlbumPage;