// src/pages/Users/UserShowPage.jsx
import { useParams, useNavigate } from "react-router-dom"
import { users } from "../../data/mockData.js"
import "../../styles/global.css"

export default function UserShowPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = users.find(u => u.id === parseInt(id))

  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR')
  const formatPhone = (p) => {
    const m = p.replace(/\D/g, '').match(/^(\d{2})(\d{5})(\d{4})$/)
    return m ? `(${m[1]}) ${m[2]}-${m[3]}` : p
  }

  const getBadge = (r) => {
    const role = r.toLowerCase()
    return role === "admin" ? "badge-success" : role === "professor" ? "badge-primary" : "badge-info"
  }

  if (!user) {
    return (
      <div className="card p-8 text-center">
        <p className="text-red-600 font-semibold mb-4">Usuário não encontrado</p>
        <button onClick={() => navigate("/usuarios")} className="btn btn-primary">Voltar</button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="p-8">
        <h1 className="page-title">Detalhes do Usuário</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Nome</label>
            <p className="text-lg font-medium bg-gray-50 p-4 rounded-xl border">{user.UserName}</p>
          </div>
          <div>
            <label className="form-label">E-mail</label>
            <p className="text-lg bg-gray-50 p-4 rounded-xl border">{user.UserEmail}</p>
          </div>
          <div className="md:col-span-2">
            <label className="form-label">Endereço</label>
            <p className="text-lg bg-gray-50 p-4 rounded-xl border">{user.UserAddress}</p>
          </div>
          <div>
            <label className="form-label">Telefone</label>
            <p className="text-lg font-mono bg-gray-50 p-4 rounded-xl border">{formatPhone(user.UserPhoneNumber)}</p>
          </div>
          <div>
            <label className="form-label">Nascimento</label>
            <p className="text-lg bg-gray-50 p-4 rounded-xl border">{formatDate(user.UserBirthDate)}</p>
          </div>
          <div className="md:col-span-2">
            <label className="form-label">Função</label>
            <span className={`badge ${getBadge(user.UserRole)} ml-2`}>
              {user.UserRole.charAt(0).toUpperCase() + user.UserRole.slice(1)}
            </span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">← Voltar</button>
        </div>
      </div>
    </div>
  )
}