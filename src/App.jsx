// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NewStudent from "./pages/Students/NewStudent"
import EditStudent from "./pages/Students/EditStudent"
import StudentList from "./components/StudentList"
import NewPermission from "./pages/Permissions/NewPermission"
import PermissionList from "./components/PermissionList"
import PermissionDetails from "./pages/Permissions/PermissionDetails"

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* REMOVA O HEADER AQUI */}

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<StudentList />} />
          <Route path="/alunos/novo" element={<NewStudent />} />
          <Route path="/alunos/editar/:id" element={<EditStudent />} />
          <Route path="/permissoes" element={<PermissionList />} />
          <Route path="/permissoes/nova" element={<NewPermission />} />
          <Route path="/permissoes/:id" element={<PermissionDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}