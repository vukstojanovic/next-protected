import "../styles/globals.css";
import Layout from "../components/Layout";
import AuthProvider from "../providers/authProvider";

function MyApp({ Component, pageProps }) {
  return pageProps.protected ? (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
