import '../styles/newMain.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

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
