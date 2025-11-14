// src/components/IndicatorList.jsx
import { useNavigate } from "react-router-dom"
import { indicators } from "../data/mockData.js"
import "../styles/global.css"

export default function IndicatorList() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h1 className="page-title">Indicadores do Sistema</h1>
        <button
          onClick={() => navigate("/indicadores/novo")}
          className="btn btn-primary"
        >
          + Novo Indicador
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Dimensão</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {indicators.map(ind => (
              <tr key={ind.id}>
                <td className="font-medium">{ind.Name}</td>
                <td>{ind.Dimension}</td>
                <td className="text-center">
                  <button
                    onClick={() => navigate(`/indicadores/${ind.id}`)}
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