// src/pages/Home.jsx
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 1rem',
      background: '#d6ebd6',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#166534',
        marginBottom: '2rem'
      }}>
        Sistema Escolar
      </h1>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <Link
          to="/alunos"
          style={{
            background: '#16a34a',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Gerenciar Alunos
        </Link>
        <Link
          to="/permissoes"
          style={{
            background: '#1d4ed8',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Gerenciar Permissões
        </Link>
        <Link
          to="/usuarios"
          style={{
            background: '#ad32d3ff',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Gerenciar Usuários
        </Link>

      </div>
    </div>
  )
}