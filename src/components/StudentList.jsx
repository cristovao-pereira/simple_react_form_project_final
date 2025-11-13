// src/components/StudentList.jsx
import { useNavigate } from "react-router-dom"
import { students, deleteStudent } from "../data/mockData"
import "../styles/table.css"  // ← IMPORTANTE!

export default function StudentList() {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <div className="table-header">
        <h1 className="table-title">Alunos Cadastrados</h1>
        <button
          onClick={() => navigate("/alunos/novo")}
          className="btn-new"
        >
          + Novo Aluno
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th className="text-center">Média</th>
              <th className="text-center">Situação</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.registration}</td>
                <td className="text-center font-semibold">{student.average}</td>
                <td className="text-center">
                  <span className={`badge ${student.situation === "Aprovado" ? "badge-success" : "badge-danger"}`}>
                    {student.situation}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => navigate(`/alunos/editar/${student.id}`)}
                    className="action-link"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Excluir aluno?")) {
                        deleteStudent(student.id)
                        navigate(0) // recarrega a página
                      }
                    }}
                    className="action-link action-delete"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}