import '@styles/global.scss';

type AppProps = {
    Component: React.FC;
    pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
