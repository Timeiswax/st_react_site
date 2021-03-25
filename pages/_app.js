import '../styles/newMain.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.init('456264005821911')
        ReactPixel.pageView()
      })
  }, [])

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
