// src/pages/Users/UserForm.jsx
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { users } from "../../data/mockData.js"
import "../../styles/global.css"

export default function UserForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [form, setForm] = useState({
    UserName: "", UserEmail: "", UserAddress: "", UserPhoneNumber: "", UserBirthDate: "", UserRole: "aluno"
  })

  useEffect(() => {
    if (isEdit) {
      const user = users.find(u => u.id === parseInt(id))
      if (user) setForm(user)
      else navigate("/usuarios")
    }
  }, [id, isEdit, navigate])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEdit) {
      const idx = users.findIndex(u => u.id === parseInt(id))
      if (idx !== -1) users[idx] = { ...users[idx], ...form }
    } else {
      const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
      users.push({ id: newId, ...form })
    }
    navigate("/usuarios")
  }

  return (
    <div className="card">
      <div className="p-8">
        <h1 className="page-title">{isEdit ? "Editar" : "Novo"} Usuário</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="form-label">Nome *</label><input name="UserName" value={form.UserName} onChange={handleChange} required className="form-input" /></div>
            <div><label className="form-label">E-mail *</label><input type="email" name="UserEmail" value={form.UserEmail} onChange={handleChange} required className="form-input" /></div>
            <div className="md:col-span-2"><label className="form-label">Endereço *</label><input name="UserAddress" value={form.UserAddress} onChange={handleChange} required className="form-input" /></div>
            <div><label className="form-label">Telefone *</label><input name="UserPhoneNumber" value={form.UserPhoneNumber} onChange={handleChange} required pattern="[0-9]{11}" className="form-input" placeholder="11987654321" /></div>
            <div><label className="form-label">Nascimento *</label><input type="date" name="UserBirthDate" value={form.UserBirthDate} onChange={handleChange} required className="form-input" /></div>
            <div className="md:col-span-2">
              <label className="form-label">Função *</label>
              <select name="UserRole" value={form.UserRole} onChange={handleChange} className="form-input">
                <option value="aluno">Aluno</option>
                <option value="professor">Professor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn btn-primary">{isEdit ? "Salvar" : "Criar"}</button>
            <button type="button" onClick={() => navigate("/usuarios")} className="btn btn-secondary">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}