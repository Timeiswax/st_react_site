import '../styles/newMain.css'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
// import ReactPixel from 'react-facebook-pixel'

const pixID = '509089730085163'

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('pixel ID here');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

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
