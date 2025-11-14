// src/components/UserList.jsx
import { useNavigate } from "react-router-dom"
import { users } from "../data/mockData.js"
import "../styles/global.css"

export default function UserList() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h1 className="page-title">Usuários do Sistema</h1>
        <button onClick={() => navigate("/usuarios/novo")} className="btn btn-primary">
          + Novo Usuário
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Função</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="font-medium">{user.UserName}</td>
                <td>{user.UserEmail}</td>
                <td>
                  <span className={`badge ${
                    user.UserRole === "admin" ? "badge-success" :
                    user.UserRole === "professor" ? "badge-primary" : "badge-info"
                  }`}>
                    {user.UserRole.charAt(0).toUpperCase() + user.UserRole.slice(1)}
                  </span>
                </td>
                <td className="text-center space-x-2">
                  <button
                    onClick={() => navigate(`/usuarios/${user.id}`)}
                    className="btn-details"
                  >
                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => navigate(`/usuarios/editar/${user.id}`)}
                    className="action-link"
                  >
                    Editar
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