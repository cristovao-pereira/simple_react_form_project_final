// src/components/PermissionList.jsx
import { useNavigate } from "react-router-dom"
import { permissions } from "../data/mockData"
import "../styles/global.css"  // ← ESTILO GLOBAL

export default function PermissionList() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h1 className="page-title">Permissões do Sistema</h1>
        <button
          onClick={() => navigate("/permissoes/nova")}
          className="btn btn-primary"
        >
          + Nova Permissão
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map(perm => (
              <tr key={perm.id}>
                <td className="font-medium">{perm.name}</td>
                <td>{perm.description}</td>
                <td className="text-center">
                  <button
                    onClick={() => navigate(`/permissoes/${perm.id}`)}
                    className="btn-details"
                  >
                    Ver Detalhes
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