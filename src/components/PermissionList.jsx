// src/components/PermissionList.jsx
import { useNavigate } from "react-router-dom"
import { permissions } from "../data/mockData"  // ← CORRIGIDO!
import "../styles/table.css"

export default function PermissionList() {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <div className="table-header">
        <h1 className="table-title">Permissões do Sistema</h1>
        <button
          onClick={() => navigate("/permissoes/nova")}
          className="btn-new"
        >
          + Nova Permissão
        </button>
      </div>

      <div className="table-container">
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