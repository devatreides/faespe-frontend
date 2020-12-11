import Head from 'next/head';
import Footer from '../../Footer';
import Header from '../../Header';
import Navbar from '../../Navbar';

export default function LayoutLP(props) {
  return (
    <>
      <Head>
        <title>Faespe - Compras</title>
        <meta property="og:title" content="Faespe - Compras" key="title" />
        <meta
          name="description"
          content="pagina de exibicao de requisicoes de compra da FAESPE"
        />
      </Head>
      <div className="flex flex-col h-screen bg-faespe-gray">
        <Header />
        <Navbar />
        <div className="py-4 flex-grow bg-faespe-gray">{props.children}</div>
        <Footer />
      </div>
    </>
  );
}
