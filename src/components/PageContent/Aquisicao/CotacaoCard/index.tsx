export default function CotacaoCard({ data }) {
  return (
    <div className="rounded bg-white p-4 my-4 lg:px-8 shadow-lg">
      <table className="table-auto">
        <thead className="table-auto">
          <tr>
            <th className="w-1/5"></th>
            <th className="w-1/3"></th>
            <th className="w-1/3"></th>
            <th className="w-1/4"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top">
              <div className="flex flex-col">
                <div className="flex my-1">
                  <div className="font-bold">Situação:</div>
                  {data.situation == 'encerrada' ? (
                    <div className="px-1 font-bold text-red-500">
                      {data.situation}
                    </div>
                  ) : (
                    <div className="px-1 font-bold text-green-500">
                      {data.situation}
                    </div>
                  )}
                </div>
                <div className="flex my-1">
                  <div className="font-bold">Protocolo:</div>
                  <div className="px-1">{data.protocol}</div>
                </div>
                <div className="flex my-1">
                  <div className="font-bold">Empresa Vencedora:</div>
                  <div className="px-1">{data.request_winner}</div>
                </div>
              </div>
            </td>
            <td className="align-top">
              <div className="flex flex-col justify-between">
                <div className="font-bold">Cidades de Entrega: </div>
                <div className="flex justify between">
                  {data.cities.map((city, index) => (
                    <div key={index} className="rounded bg-gray-200 mx-1">
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            </td>
            <td className="align-top">
              <div className="flex flex-col">
                <div className="font-bold">Categorias do Produto: </div>
                <div className="flex justify between">
                  {data.categories.map((category, index) => (
                    <div key={index} className="rounded bg-gray-200 mx-1">
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </td>
            <td className="align-top">
              <div className="flex flex-col justify-between">
                <div className="flex my-1">
                  <div className="font-bold">Prazo de entrega: </div>
                  <div>{data.deadline}</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-wrap justify-end text-blue-400 font-bold cursor-pointer">
        Mais detalhes
      </div>
    </div>
  );
}
