// src/components/PermissionForm.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { permissions, savePermission } from "../data/mockData"

export default function PermissionForm() {
  const [form, setForm] = useState({ name: "", description: "" })
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    savePermission({ ...form, id: Date.now() })
    navigate("/permissoes")
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Nova Permissão</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome da Permissão
            </label>
            <input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="ex: admin"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="O que essa permissão permite?"
              required
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Criar Permissão
            </button>
            <button type="button" onClick={() => navigate("/permissoes")} className="bg-gray-300 px-6 py-2 rounded-lg">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}