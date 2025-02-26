// ColaboradoresData.tsx  
interface Colaborador {  
  nome: string;  
  departamento: string;  
  salario: number;  
  email: string;  
  imagem: string;  
} 

// componentes/colaboradores/colaboradoresData.js  
const colaboradoresData = [  
    {  
      nome: 'Jim Halpert',  
      departamento: 'Vendas',  
      salario: 2000.00,  
      email: 'jim.halpert@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/9d/d0/68/9dd06809fe624bae4da7e37c4f6ba514.jpg',  
    },  
    {  
      nome: 'Pam Beesly',  
      departamento: 'Recepção',  
      salario: 2000.00, 
      email: 'recepcao@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/be/bd/c9/bebdc95609fec9a94cd9a1477f863b17.jpg',  
    },  
    {  
      nome: 'Stanley Hudson',  
      departamento: 'Vendas',  
      salario: 2000.00,  
      email: 'stanley@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/bd/3a/ba/bd3aba877727be6c2572d96c7e875a4c.jpg',  
    },  
    {  
      nome: 'Oscar Nunes',  
      departamento: 'Contabilidade',  
      salario: 3000.00,  
      email: 'oscar@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/11/99/ce/1199ce25eca269b9e05699699b093ee2.jpg',  
    },  
    {  
      nome: 'Creed Bratton',  
      departamento: 'Qualidade',  
      salario: 5000.00,  
      email: 'creed@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/61/26/ab/6126ab2a943d29623d7b255cc6c24c94.jpg',  
    },  
    {  
      nome: 'Dwight Schrute',  
      departamento: 'Vendas // Assistente do Gerente Regional',  
      salario: 2000.00,  
      email: 'dwight.schrute@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/8b/44/b3/8b44b3b043187e61beab24abcfc76e49.jpg',  
    },  
    {  
      nome: 'Ryan Howard',  
      departamento: 'Vendas/Estagiário',  
      salario: 0.00,  
      email: 'temporario@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/6b/52/9a/6b529a9b15603e6d9cb2b016b3514ff5.jpg',  
    },  
    {  
      nome: 'Meredith Palmer',  
      departamento: 'Compras',  
      salario: 2000.00,  
      email: 'compras@dundermifflin.com',  
      imagem: 'https://i.pinimg.com/736x/fe/3d/ff/fe3dff938c853adcdd075db0b91c0796.jpg',  
    },  
  ];  
  
export { colaboradoresData };
export type { Colaborador };
