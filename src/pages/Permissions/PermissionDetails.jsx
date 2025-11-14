// src/pages/Permissions/PermissionDetails.jsx
import { useParams, useNavigate } from "react-router-dom"
import { permissions } from "../../data/mockData.js"
import "../../styles/global.css"  // ← ESTILO GLOBAL

export default function PermissionDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const permission = permissions.find(p => p.id === parseInt(id))

  if (!permission) {
  return (
    <div className="card p-8 text-center">
      <p className="text-red-600 text-lg font-semibold mb-4">Permissão não encontrada.</p>
      <button onClick={() => navigate("/permissoes")} className="btn btn-primary">
        Voltar para Permissões
      </button>
    </div>
  )
  }

  return (
    <div className="card">
      <div className="p-8">
        <h1 className="page-title">Detalhes da Permissão</h1>

        <div className="space-y-6">
          <div>
            <label className="form-label">Nome da Permissão</label>
            <p className="text-lg font-medium text-gray-900 bg-gray-50 p-4 rounded-xl border">
              {permission.name}
            </p>
          </div>

          <div>
            <label className="form-label">Descrição</label>
            <p className="text-lg text-gray-800 bg-gray-50 p-4 rounded-xl border">
              {permission.description}
            </p>
          </div>

          <div>
            <label className="form-label">ID</label>
            <p className="text-lg font-mono text-gray-700">#{permission.id}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/permissoes")}
            className="btn btn-secondary"
          >
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  )
}