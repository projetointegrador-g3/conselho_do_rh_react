import { 
  ShoppingCart, Receipt, CheckCircle, Plus, Trash, Folder, Archive, PencilLine,
  Package,
  Calculator,
  Dresser,
  Medal,
  UsersThree, 
} from '@phosphor-icons/react';

const departamentos = [
  { nome: "Vendas", icone: Archive },
  { nome: "Compras", icone: ShoppingCart },
  { nome: "Recepção", icone: Receipt },
  { nome: "Qualidade", icone: CheckCircle },
  { nome: "Contabilidade", icone: Calculator },
  { nome: "Atendimento ao Cliente", icone: UsersThree },
  { nome: "Diretoria", icone: Medal },
  { nome: "Estoque", icone: Dresser },
  { nome: "Logística", icone: Package },
];

function Departamentos() {
  return (
    <div className="font-sans">
      <div className="flex items-center justify-between pr-18 gap-2 m-16 ml-32">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Folder /> Departamentos
        </h1>
        <button 
          className="bg-zinc-200 border-none cursor-pointer rounded-md p-2 flex items-center text-zinc-500 hover:text-zinc-800 hover:scale-104" 
          onClick={() => alert('Adicionar novo departamento')} 
        >
          Adicionar novo departamento <Plus />
        </button>
      </div>
      <ul className="list-none px-32">
        {departamentos.map(({ nome, icone: Icon }, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center justify-between bg-zinc-300 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Icon className="size-6" />
                <strong>{nome}</strong>
              </div>
              <button className="flex gap-2 border-none cursor-pointer" onClick={() => alert(`Excluir departamento: ${nome}`)}>
                <PencilLine className='size-6 hover:text-zinc-500' />
                <Trash className='size-6 text-red-700 hover:text-red-500' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departamentos;
