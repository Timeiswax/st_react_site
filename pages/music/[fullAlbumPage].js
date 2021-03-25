import React, { Component, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import releaseCarouselData from '../../public/js/releaseCarouselData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faBandcamp, faYoutube, faItunes} from '@fortawesome/free-brands-svg-icons'
import PlayWidget from 'react-spotify-widgets'
import Head from 'next/head'
// import ReactPixel from 'react-facebook-pixel'

const fullAlbumPage = (props) => {
    const router = useRouter();
    useEffect(() => {
        import('react-facebook-pixel')
          .then(module => module.default)
          .then(ReactPixel => {
            ReactPixel.init('509089730085163')
            ReactPixel.pageView()
          })
      }, [])

    const albumName = router.query.fullAlbumPage;

    const iconRef = {"faSpotify": faSpotify, "faBandcamp":faBandcamp, "faYoutube":faYoutube, "faItunes":faItunes}
    const dataArr = Object.keys(releaseCarouselData).map(key => releaseCarouselData[key])

    for(const item in dataArr){
        if(dataArr[item].title === albumName){
            const sc = dataArr[item];
            var title = sc.title
            var pic = sc.pic;
            var spotify = sc.links['spotify'].uri
            console.log(spotify)
            var links = Object.keys(sc.links).map(i =>{
                const iconName = sc.links[i]['icon'];
                  return(
                    <button 
                    className="link-icon"
                    style={{
                        "backgroundColor":sc.links[i]['color'],
                        "flexGrow":sc.links[i]['fg']}}
                    key={sc.links[i]['link']} > 
                        <a href={sc.links[i]['link']} >
                            <FontAwesomeIcon icon={iconRef[iconName]}></FontAwesomeIcon>
                        </a>
                    </button>
                        )
                })
        }
    }
    console.log(pic)
    // let v = new Vibrant(pic)
    // v.getPalette((err, palette) => console.log(palette))

    return (
        <div>
            <Head>
                <title>Listen to {title}</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* <Header /> */}
            <div className="album-page">
                <div className="col">
                    <h1>Stream {title} by Shane Thiede</h1>
                    <div className="album-box-1">
                        <h1>{title}</h1>
                        <img src={pic}></img>
                        <h4 className="album-cta">Listen:</h4>
                        <div className="sub-box wrap-row">
                            {links}
                        </div>
                    </div>
                    <div className="album-box-2">
                        <PlayWidget
                            width={380}
                            height={250}
                            uri={spotify}
                            lightTheme={false}
                        />
                    </div>
                </div>
            </div>
        </div>

      );
}
 
export default fullAlbumPage;