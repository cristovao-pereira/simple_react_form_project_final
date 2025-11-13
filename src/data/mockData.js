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

export let permissions = [
  { id: 1, name: "admin", description: "Acesso total ao sistema" },
  { id: 2, name: "leitura", description: "Apenas visualizar dados" },
  { id: 3, name: "professor", description: "Editar notas e alunos" }
]

export let users = [
  {
    id: 1,
    userName: "João Silva",
    userEmail: "joao@escola.com",
    userAddress: "Rua das Flores, 123 - São Paulo, SP",
    userPhoneNumber: "(11) 98765-4321",
    userBirthDate: "1985-03-15",
    userRole: "admin"
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