export default function Searchbar() {
  function handleSubmit() {
    alert('pesquisando... achou nada!');
  }
  return (
    <form className="shadow flex" onSubmit={handleSubmit}>
      <input
        className="w-full rounded p-2"
        type="text"
        placeholder="Pesquisar..."
      ></input>
      <button className="bg-white w-auto flex justify-end items-center text-faespe-green p-2 hover:text-green-400">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </form>
  );
}
