// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import StudentList from "./components/StudentList"
import NewStudent from "./pages/Students/NewStudent"
import EditStudent from "./pages/Students/EditStudent"
import PermissionList from "./components/PermissionList"
import NewPermission from "./pages/Permissions/NewPermission"
import PermissionDetails from "./pages/Permissions/PermissionDetails"
import UserList from "./components/UserList"
import UserShowPage from "./pages/Users/UserShowPage"
import UserForm from "./pages/Users/UserForm"
import IndicatorList from "./components/IndicatorList"
import IndicatorsShowPage from "./pages/Indicators/IndicatorsShowPage"
import UnitList from "./components/UnitList"
import UnitsShowPage from "./pages/Units/UnitsShowPage"

export default function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-700 text-white p-4 shadow-md">

      </header>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Alunos */}
          <Route path="/alunos" element={<StudentList />} />
          <Route path="/alunos/novo" element={<NewStudent />} />
          <Route path="/alunos/editar/:id" element={<EditStudent />} />

          {/* Permissões */}
          <Route path="/permissoes" element={<PermissionList />} />
          <Route path="/permissoes/nova" element={<NewPermission />} />
          <Route path="/permissoes/:id" element={<PermissionDetails />} />

          {/* Usuários */}
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/usuarios/:id" element={<UserShowPage />} />
          <Route path="/usuarios/novo" element={<UserForm />} />
          <Route path="/usuarios/editar/:id" element={<UserForm />} />

          {/* INDICADORES */}
          <Route path="/indicadores" element={<IndicatorList />} />
          <Route path="/indicadores/:id" element={<IndicatorsShowPage />} />

          {/* Unidades */}
          <Route path="/unidades" element={<UnitList />} />
          <Route path="/unidades/:id" element={<UnitsShowPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}