// src/components/UnitList.jsx
import { useNavigate } from "react-router-dom"
import { units } from "../data/mockData.js"

export default function UnitList() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#166534'
            }}>
              Unidades
            </h1>
            <button
              onClick={() => navigate("/unidades/novo")}
              style={{
                background: '#16a34a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              + Nova Unidade
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '1rem'
            }}>
              <thead>
                <tr style={{ background: '#ecfdf5' }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#166534',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem'
                  }}>Nome</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#166534',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem'
                  }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {units.map(unit => (
                  <tr key={unit.id} style={{
                    borderTop: '1px solid #e5e7eb',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f0fdf4'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{
                      padding: '1rem',
                      fontWeight: '500'
                    }}>{unit.UnitName}</td>
                    <td style={{
                      padding: '1rem',
                      textAlign: 'center'
                    }}>
                      <button
                        onClick={() => navigate(`/unidades/${unit.id}`)}
                        style={{
                          background: '#3b82f6',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(59,130,246,0.3)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
                        onMouseLeave={e => e.currentTarget.style.background = '#3b82f6'}
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
      </div>
    </div>
  )
}