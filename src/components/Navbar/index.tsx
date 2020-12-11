import LinkActive from './LinkActive';

export default function Navbar() {
  return (
    <nav className="py-1 bg-faespe-green h-34">
      <div className="container mx-auto flex justify-between items-center font-bold p-2 lg:px-3">
        <LinkActive href="/home">
          <a className="hover:text-gray-100">Home</a>
        </LinkActive>
        <LinkActive href="#">
          <a className="hover:text-gray-100">Institucional</a>
        </LinkActive>
        <LinkActive href="/editais">
          <a className="hover:text-gray-100">Editais</a>
        </LinkActive>
        <LinkActive href="/aquisicao">
          <a className="hover:text-gray-100">Portal de Aquisições</a>
        </LinkActive>
        <LinkActive href="#">
          <a className="hover:text-gray-100">Transparência</a>
        </LinkActive>
        <LinkActive href="#">
          <a className="hover:text-gray-100">Contato</a>
        </LinkActive>
      </div>
    </nav>
  );
}
