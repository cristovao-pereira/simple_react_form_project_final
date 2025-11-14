// src/pages/Units/UnitsShowPage.jsx
import { useParams, useNavigate } from "react-router-dom"
import { units } from "../../data/mockData.js"

export default function UnitsShowPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const unit = units.find(u => u.id === parseInt(id))

  if (!unit) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px'
        }}>
          <p style={{ color: '#dc2626', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Unidade não encontrada.
          </p>
          <button
            onClick={() => navigate("/unidades")}
            style={{
              background: '#16a34a',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
            onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
          >
            Voltar para Unidades
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#166534',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Detalhes da Unidade
          </h1>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Nome da Unidade */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Nome da Unidade
              </label>
              <p style={{
                background: '#f3f4f6',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#111827'
              }}>
                {unit.UnitName}
              </p>
            </div>

            {/* Descrição */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Descrição
              </label>
              <p style={{
                background: '#f3f4f6',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db',
                fontSize: '1.1rem',
                color: '#374151',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6'
              }}>
                {unit.UnitDescription}
              </p>
            </div>

            {/* ID */}
            <div style={{
              paddingTop: '1rem',
              borderTop: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                ID da unidade: <code style={{
                  background: '#e5e7eb',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.375rem',
                  fontFamily: 'monospace'
                }}>{unit.id}</code>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: '#6b7280',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                font_WEIGHT: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#4b5563'}
              onMouseLeave={e => e.currentTarget.style.background = '#6b7280'}
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}