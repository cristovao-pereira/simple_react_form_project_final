// src/pages/Indicators/IndicatorsShowPage.jsx
import { useParams, useNavigate } from "react-router-dom"
import { indicators } from "../../data/mockData.js"
import "../../styles/global.css"

export default function IndicatorsShowPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const indicator = indicators.find(ind => ind.id === parseInt(id))

  if (!indicator) {
    return (
      <div className="card p-8 text-center">
        <p className="text-red-600 text-lg font-semibold mb-4">Indicador não encontrado.</p>
        <button onClick={() => navigate("/indicadores")} className="btn btn-primary">
          Voltar
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="p-8">
        <h1 className="page-title">Detalhes do Indicador</h1>

        <div className="space-y-6">
          <div>
            <label className="form-label">Nome</label>
            <p className="text-xl font-semibold bg-gray-50 p-4 rounded-xl border">
              {indicator.Name}
            </p>
          </div>

          <div>
            <label className="form-label">Dimensão</label>
            <p className="text-lg bg-gray-50 p-4 rounded-xl border">
              {indicator.Dimension}
            </p>
          </div>

          <div>
            <label className="form-label">Descrição</label>
            <p className="text-lg bg-gray-50 p-4 rounded-xl border whitespace-pre-wrap">
              {indicator.Description}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  )
}