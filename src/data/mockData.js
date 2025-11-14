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

export let permissions = [
  { id: 1, name: "admin", description: "Acesso total ao sistema" },
  { id: 2, name: "leitura", description: "Apenas visualizar dados" },
  { id: 3, name: "professor", description: "Editar notas e alunos" }
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
