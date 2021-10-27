import { Provider } from "react-redux"
<<<<<<< HEAD
import store from '../src/redux/index'
=======
import store from '../src/redux'
>>>>>>> 787f8272a2810a8b7e2e0aa1a828a6b6e3c400b4

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={ store } >
      <Component { ...pageProps } />
    </Provider>
  )
}

export default MyApp
