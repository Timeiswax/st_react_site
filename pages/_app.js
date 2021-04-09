import '../styles/newMain.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import {useEffect} from 'react'

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()


  
  const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-149635073-1'
      })
    ]
  })

  analytics.page()

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then(module => module.default)
  //     .then(ReactPixel => {
  //       ReactPixel.init('780488376199611')
  //       ReactPixel.pageView()
  //     })
  // }, [])

  return(
    <TransitionGroup>
      <CSSTransition
      appear={true}
      key={router.pathname}
      timeout={1000}
      classNames={"fullPageTransition"}
      >
        <Component {...pageProps} />
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MyApp
