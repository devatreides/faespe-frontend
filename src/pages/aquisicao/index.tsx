import checkSessionAndGetData from '../../hooks/checkSessionAndGetData';
import LayoutLP from '../../components/Layouts/LayoutLP';
import Select from 'react-select';
import CotacaoCard from '../../components/PageContent/Aquisicao/CotacaoCard';

export default function Aquisicao() {
  const { response, isLoading, isError } = checkSessionAndGetData(
    'purchase-requests'
  );

  console.log(response);

  const categoryOptions = [
    { value: 1, label: 'Equipamento de TI' },
    { value: 2, label: 'Material Escolar' },
    { value: 3, label: 'Serviço de Buffet' }
  ];
  const situationOptions = [
    { value: 1, label: 'Aberta' },
    { value: 2, label: 'Encerrada' }
  ];
  const cityOptions = [
    { value: 1, label: 'Cáceres' },
    { value: 2, label: 'Sinop' },
    { value: 3, label: 'Vila Rica' }
  ];

  if (isError) {
    return (
      <LayoutLP>
        <div className="container mx-auto">
          <div className="text-md text-green-700 font-bold">
            Cotação de Preço
          </div>
          <div className="text-sm text-gray-700">
            Nesta área você tem acesso aos processos de orçamentos, compras que
            a <strong>FAESPE</strong> realiza para a boa gestão dos projetos
          </div>
          <div className="pt-10">
            <div className="text-md text-green-700 font-bold">Legislação</div>
            <ul>
              <li>- LEI xxxx-2020</li>
              <li>- LEI xxxx-2020</li>
              <li>- LEI xxxx-2020</li>
            </ul>
          </div>
          <div className="pt-10">
            <form className="space-y-4 text-gray-700">
              <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                <div className="w-full px-2 md:w-1/4">
                  <label
                    className="block mb-1 font-bold"
                    htmlFor="formGridCode_month"
                  >
                    Categoria de Produto
                  </label>
                  <Select
                    isMulti
                    options={categoryOptions}
                    styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  />
                </div>
                <div className="w-full px-2 md:w-1/4">
                  <label
                    className="block mb-1 font-bold"
                    htmlFor="formGridCode_year"
                  >
                    Status da Cotação
                  </label>
                  <Select
                    options={situationOptions}
                    styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  />
                </div>
                <div className="w-full px-2 md:w-1/4">
                  <label
                    className="block mb-1 font-bold"
                    htmlFor="formGridCode_cvc"
                  >
                    Cidade de Entrega
                  </label>
                  <Select
                    isMulti
                    options={cityOptions}
                    styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  />
                </div>
                <div className="w-full pt-7 md:w-1/4">
                  <button className="bg-faespe-green w-auto flex rounded font-bold justify-end items-center p-2 hover:text-white">
                    Filtrar {'  '}
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
                </div>
              </div>
            </form>
          </div>
          <div className="pt-10">
            {!isLoading && (
              <div className="prose-sm p-4 md:py-10 md:px-0 md:prose lg:pr ose-lg max-w-none md:max-w-none lg:max-w-none">
                <h1 className="prose">Ops...</h1>
                <p>Aconteceu algum erro. Peraí.</p>
              </div>
            )}
          </div>
        </div>
      </LayoutLP>
    );
  }

  return (
    <LayoutLP>
      <div className="container mx-auto">
        <div className="text-md text-green-700 font-bold">Cotação de Preço</div>
        <div className="text-sm text-gray-700">
          Nesta área você tem acesso aos processos de orçamentos, compras que a{' '}
          <strong>FAESPE</strong> realiza para a boa gestão dos projetos
        </div>
        <div className="pt-10">
          <div className="text-md text-green-700 font-bold">Legislação</div>
          <ul>
            <li>- LEI xxxx-2020</li>
            <li>- LEI xxxx-2020</li>
            <li>- LEI xxxx-2020</li>
          </ul>
        </div>
        <div className="pt-10">
          <form className="space-y-4 text-gray-700">
            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full px-2 md:w-1/4">
                <label
                  className="block mb-1 font-bold"
                  htmlFor="formGridCode_month"
                >
                  Categoria de Produto
                </label>
                <Select
                  isMulti
                  options={categoryOptions}
                  styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                />
              </div>
              <div className="w-full px-2 md:w-1/4">
                <label
                  className="block mb-1 font-bold"
                  htmlFor="formGridCode_year"
                >
                  Status da Cotação
                </label>
                <Select
                  options={situationOptions}
                  styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                />
              </div>
              <div className="w-full px-2 md:w-1/4">
                <label
                  className="block mb-1 font-bold"
                  htmlFor="formGridCode_cvc"
                >
                  Cidade de Entrega
                </label>
                <Select
                  isMulti
                  options={cityOptions}
                  styles="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                />
              </div>
              <div className="w-full pt-7 md:w-1/4">
                <button className="bg-faespe-green w-auto flex rounded font-bold justify-end items-center p-2 hover:text-white">
                  Filtrar {'  '}
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
              </div>
            </div>
          </form>
        </div>
        <div className="pt-10">
          {response?.map((cotacao, index) => (
            <div key={index}>
              <CotacaoCard data={cotacao} />
            </div>
          ))}
        </div>
      </div>
    </LayoutLP>
  );
}
