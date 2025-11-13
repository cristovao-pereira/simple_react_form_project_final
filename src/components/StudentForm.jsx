// src/components/StudentForm.jsx
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { students, saveStudent, updateStudent } from "../data/mockData"
import "../styles/StudentForm.css"

export default function StudentForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [form, setForm] = useState({
    name: "",
    registration: "",
    grade1: "",
    grade2: "",
    situation: "",
    average: "",
    semester: "1",
    frequency: "Annually",
    course: "Software Eng.",
    subjects: [],
    active: true,
  })

  const frequencies = ["Monthly", "Weekly", "Annually"]
  const courses = ["Software Eng.", "Computer Science", "DevOps"]
  const subjects = ["Database", "Backend", "Frontend", "Project"]
  const semesters = [1, 2]

  useEffect(() => {
    if (isEdit) {
      const student = students.find(s => s.id === parseInt(id))
      if (student) setForm(student)
    }
  }, [id, isEdit])

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (type === "checkbox") {
      setForm(f => ({
        ...f,
        subjects: checked
          ? [...f.subjects, value]
          : f.subjects.filter(s => s !== value)
      }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const average = ((parseFloat(form.grade1) || 0) + (parseFloat(form.grade2) || 0)) / 2
    const situation = average >= 6 ? "Aprovado" : "Reprovado"

    const studentData = {
      ...form,
      average: average.toFixed(1),
      situation,
      id: isEdit ? parseInt(id) : Date.now()
    }

    if (isEdit) {
      updateStudent(studentData)
    } else {
      saveStudent(studentData)
    }

    navigate("/alunos")
  }

  return (
    <div className="student-page">
      <form className="student-card" onSubmit={handleSubmit}>
        <h1 className="student-title">
          {isEdit ? "Editar Aluno" : "Cadastro de Aluno"}
        </h1>

        <div className="form-grid">
          <div className="form-field">
            <label>Nome do Aluno</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="ex: João Silva"
              required
            />
          </div>

          <div className="form-field">
            <label>Matrícula</label>
            <input
              name="registration"
              value={form.registration}
              onChange={handleChange}
              placeholder="ex: 2023001"
              required
            />
          </div>
        </div>

        <h2 className="section-title">Notas</h2>
        <div className="form-grid">
          <div className="form-field">
            <label>Nota 1</label>
            <input
              type="number"
              step="0.1"
              name="grade1"
              value={form.grade1}
              onChange={handleChange}
              min="0"
              max="10"
            />
          </div>
          <div className="form-field">
            <label>Nota 2</label>
            <input
              type="number"
              step="0.1"
              name="grade2"
              value={form.grade2}
              onChange={handleChange}
              min="0"
              max="10"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label>Média Final</label>
            <input
              value={((parseFloat(form.grade1) || 0) + (parseFloat(form.grade2) || 0)) / 2 || ""}
              disabled
              className="bg-gray-100"
            />
          </div>
          <div className="form-field">
            <label>Situação</label>
            <input
              value={form.grade1 && form.grade2
                ? (parseFloat(form.grade1) + parseFloat(form.grade2)) / 2 >= 6
                  ? "Aprovado"
                  : "Reprovado"
                : ""
              }
              disabled
              className="bg-gray-100"
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label>Semestre</label>
            <select name="semester" value={form.semester} onChange={handleChange}>
              {semesters.map(s => (
                <option key={s} value={s}>{s}º Semestre</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>Curso</label>
            <select name="course" value={form.course} onChange={handleChange}>
              {courses.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>Disciplinas</label>
          <div className="checkbox-group">
            {subjects.map(s => (
              <label key={s} className="checkbox-label">
                <input
                  type="checkbox"
                  value={s}
                  checked={form.subjects.includes(s)}
                  onChange={handleChange}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        <div className="form-field switch-field">
          <label>Status</label>
          <label className="switch">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <span className="slider" />
          </label>
        </div>

        <div className="actions">
          <button type="submit" className="primary">
            {isEdit ? "Atualizar" : "Cadastrar"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/alunos")}
            className="secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}