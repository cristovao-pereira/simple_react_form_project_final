// src/pages/Home.jsx
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
      padding: '1.5rem',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#166534',
          marginBottom: '3rem'
        }}>
          Sistema Escolar
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* ALUNOS */}
          <Link
            to="/alunos"
            style={{
              display: 'block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(37,99,235,0.25)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1d4ed8'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#2563eb'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Gerenciar Alunos
          </Link>

          {/* PERMISSÕES */}
          <Link
            to="/permissoes"
            style={{
              display: 'block',
              backgroundColor: '#7c3aed',
              color: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(124,58,237,0.25)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#6d28d9'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#7c3aed'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Gerenciar Permissões
          </Link>

          {/* USUÁRIOS */}
          <Link
            to="/usuarios"
            style={{
              display: 'block',
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(79,70,229,0.25)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#4338ca'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#4f46e5'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Gerenciar Usuários
          </Link>

          {/* INDICADORES */}
          <Link
            to="/indicadores"
            style={{
              display: 'block',
              backgroundColor: '#ea580c',
              color: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(234,88,12,0.25)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#dc2626'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#ea580c'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Indicadores
          </Link>
        </div>
      </div>
    </div>
  )
}