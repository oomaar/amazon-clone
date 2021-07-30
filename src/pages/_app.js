import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { Provider as AuthProvider } from "next-auth/client";
import { Footer, Header } from '../Components';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Header />
        <div className="h-24" />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
