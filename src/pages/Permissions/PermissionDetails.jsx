// src/pages/Permissions/PermissionDetails.jsx
import { useParams, useNavigate } from "react-router-dom"
import { permissions } from "../../data/mockData"

export default function PermissionDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const permission = permissions.find(p => p.id === parseInt(id))

  if (!permission) {
    return <div className="text-center py-10">Permissão não encontrada.</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Detalhes da Permissão</h1>
        <div className="space-y-4">
          <div>
            <strong>Nome:</strong> {permission.name}
          </div>
          <div>
            <strong>Descrição:</strong> {permission.description}
          </div>
        </div>
        <button
          onClick={() => navigate("/permissoes")}
          className="mt-6 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          Voltar
        </button>
      </div>
    </div>
  )
}