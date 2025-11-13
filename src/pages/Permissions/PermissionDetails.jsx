// src/pages/Permissions/PermissionDetails.jsx
import { useParams, useNavigate } from "react-router-dom"
import { permissions } from "../../data/mockData.js"
import "../../styles/table.css"

export default function PermissionDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const permission = permissions.find(p => p.id === parseInt(id))

  if (!permission) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 text-lg font-semibold">Permissão não encontrada.</p>
        <button 
          onClick={() => navigate("/permissoes")} 
          className="btn-new mt-4"
        >
          Voltar
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="table-container">
        <div className="p-8">
          <h1 className="table-title mb-6">Detalhes da Permissão</h1>

          <div>
            <div className="detail-field">
              <span className="detail-label">Nome da Permissão</span>
              <p className="detail-value">{permission.name}</p>
            </div>

            <div className="detail-field">
              <span className="detail-label">Descrição</span>
              <p className="detail-value">{permission.description}</p>
            </div>

            <div className="detail-field">
              <span className="detail-label">ID</span>
              <p className="detail-value">#{permission.id}</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => navigate("/permissoes")}
              className="bg-gray-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 shadow-md flex items-center gap-2"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}