# Sistema Escolar - Cadastro de Alunos

Um sistema web completo para **gerenciamento de alunos e permissões**, desenvolvido em **React + Vite**. Ideal para escolas, cursos ou instituições de ensino.

---

## Funcionalidades

- **Cadastro e Edição de Alunos**  
  - Nome, matrícula, notas, semestre, curso  
  - Cálculo automático de **média final** e **situação** (Aprovado/Reprovado)  
  - Seleção múltipla de disciplinas  
  - Status ativo/inativo com switch  

- **Listagem de Alunos**  
  - Tabela responsiva com filtros visuais  
  - Badges coloridos para situação  
  - Ações: Editar / Excluir  

- **Gerenciamento de Permissões**  
  - Criar, listar e visualizar permissões  
  - Base para sistema de roles (admin, leitura, etc.)  

- **Navegação Intuitiva**  
  - Home com acesso rápido  
  - Rotas com `react-router-dom`  

---

## Tecnologias

- **React 18** + **Vite**  
- **React Router DOM** (navegação)  
- **CSS Puro** (sem Tailwind, sem dependências externas)  
- **Mock Data** (simulação de backend)  

---

## Como Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/cristovao-pereira/simple_react_form_project_final
cd simple_react_form_project_final

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm run dev