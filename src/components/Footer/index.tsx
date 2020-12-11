export default function Footer() {
  return (
    <footer className="bottom-0">
      <div className="flex bg-faespe-green justify-center py-8 flex-col items-center">
        <img src="/images/faespe-logo.svg" width="100" alt="faespe-logo" />
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:contaot@faespe.org?subject=Gostaria+de+Ajuda!"
          className="text-white font-bold text-sm mt-2 hover:text-gray-100"
        >
          contato@faespe.org
        </a>
      </div>
    </footer>
  );
}
