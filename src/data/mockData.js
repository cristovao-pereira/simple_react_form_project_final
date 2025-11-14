// src/data/mockData.js

export let students = [
  {
    id: 1,
    name: "Maria Silva",
    registration: "2023001",
    grade1: "8.5",
    grade2: "7.0",
    average: "7.8",
    situation: "Aprovado",
    semester: "1",
    course: "Software Eng.",
    subjects: ["Database", "Backend"],
    active: true
  }
]

export let users = [
  {
    id: 1,
    UserName: "João Silva",
    UserEmail: "joao@escola.com",
    UserAddress: "Rua das Flores, 123 - São Paulo, SP",
    UserPhoneNumber: "11987654321",
    UserBirthDate: "1985-03-15",
    UserRole: "admin"
  },
  {
    id: 2,
    UserName: "Maria Oliveira",
    UserEmail: "maria@escola.com",
    UserAddress: "Av. Brasil, 456 - Rio de Janeiro, RJ",
    UserPhoneNumber: "21999887766",
    UserBirthDate: "1990-07-22",
    UserRole: "professor"
  },
  {
    id: 3,
    UserName: "Pedro Santos",
    UserEmail: "pedro@escola.com",
    UserAddress: "Rua do Sol, 789 - Belo Horizonte, MG",
    UserPhoneNumber: "31991234567",
    UserBirthDate: "1995-11-30",
    UserRole: "aluno"
  }
]

export let indicators = [
  {
    id: 1,
    Name: "Taxa de Aprovação",
    Dimension: "Desempenho Acadêmico",
    Description: "Percentual de alunos aprovados em relação ao total matriculado no semestre.\nFórmula: (Aprovados / Matriculados) × 100"
  },
  {
    id: 2,
    Name: "Satisfação do Aluno",
    Dimension: "Qualidade de Ensino",
    Description: "Média das avaliações dos alunos sobre a experiência educacional.\nEscala: 0 a 10"
  }
]

export let permissions = [
  { id: 1, name: "admin", description: "Acesso total ao sistema" },
  { id: 2, name: "leitura", description: "Apenas visualizar dados" },
  { id: 3, name: "professor", description: "Editar notas e alunos" }
]

export let units = [
  {
    id: 1,
    UnitName: "Unidade Matriz",
    UnitDescription: "Sede principal da rede escolar.\nLocalizada no centro da cidade.\nCapacidade: 800 alunos.\nInaugurada em 2010."
  },
  {
    id: 2,
    UnitName: "Filial Zona Sul",
    UnitDescription: "Unidade moderna com foco em tecnologia.\nPossui laboratório de robótica, sala maker e auditório.\nCapacidade: 500 alunos."
  },
  {
    id: 3,
    UnitName: "Campus Universitário",
    UnitDescription: "Parceria com universidade local.\nCursos técnicos e graduação.\nÁrea de 12.000 m²."
  }
]



// Funções de CRUD
export const saveStudent = (student) => students.push(student)
export const updateStudent = (updated) => {
  students = students.map(s => s.id === updated.id ? updated : s)
}
export const deleteStudent = (id) => {
  students = students.filter(s => s.id !== id)
}
export const savePermission = (perm) => permissions.push(perm)
