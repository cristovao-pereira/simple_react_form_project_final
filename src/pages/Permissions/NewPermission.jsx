// src/pages/Permissions/NewPermission.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { permissions } from "../../data/mockData.js"
import "../../styles/global.css"

export default function NewPermission() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", description: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    permissions.push({
      id: permissions.length + 1,
      name: form.name.trim(),
      description: form.description.trim()
    })
    navigate("/permissoes")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="table-container">
        <div className="p-8">
          <h1 className="table-title">Nova Permissão</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NOME */}
            <div>
              <label className="form-label">
                Nome da Permissão <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="ex: admin"
                required
                className="form-input"
              />
              <p className="form-hint">ex: admin, professor, leitura</p>
            </div>

            {/* DESCRIÇÃO */}
            <div>
              <label className="form-label">Descrição</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="O que essa permissão permite fazer?"
                className="form-textarea"
              />
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button type="submit" className="btn-primary">
                Criar Permissão
              </button>
              <button
                type="button"
                onClick={() => navigate("/permissoes")}
                className="btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}