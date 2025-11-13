import { useState } from "react";
import "./IndicatorForm.css";

export default function IndicatorForm() {
    const [form, setForm] = useState({
        name: "Employee Trust Index",
        code: "ETI_001",
        weight: "0.5",
        weight2: "0.5",
        calculationMethod: "Mean",
        formula: "",
        target: "6",
        threshold: "3.8",
        frequency: "Annually",
        ownerArea: "Human Resources",
        themes: ["Leadership"],
        active: true,
    });

    const calculationMethods = ["Mean", "Median", "Sum", "Weighted Mean"];
    const frequencies = ["Monthly", "Weekly", "Annually"];
    const areas = ["Software Eng.", "Computer Science", "DevOps"];
    const themes = ["Database", "Backend", "Frontend", "Project"];
    const semester = [1, 2]

    function handleChange(e) {
        const { name, value, type, checked, selectedOptions } = e.target;

        if (type === "checkbox") {
            setForm((f) => ({ ...f, [name]: checked }));
        } else if (type === "select-multiple") {
            const vals = Array.from(selectedOptions).map((o) => o.value);
            setForm((f) => ({ ...f, [name]: vals }));
        } else {
            setForm((f) => ({ ...f, [name]: value }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting Indicator:", form);
        alert("Saved! (Check the console for the payload)");
    }

    return (
        <div className="indicator-page">
            <form className="indicator-card" onSubmit={handleSubmit}>
                <h1 className="indicator-title">Students Form</h1>

                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="name">Username</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Indicator name"
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="code">ID</label>
                        <input
                            id="code"
                            name="code"
                            type="text"
                            value={form.code}
                            onChange={handleChange}
                            placeholder="e.g., ETI_001"
                            required
                        />
                    </div>
                </div>

                <h2 className="section-title">Grades</h2>

                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="weight">Grade 1</label>
                        <input
                            id="weight"
                            name="weight"
                            type="number"
                            inputMode="decimal"
                            step="0.5"
                            value={form.weight}
                            onChange={handleChange}
                            placeholder="0.5"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="calculationMethod">Grade 2</label>
                        <input
                            id="weight2"
                            name="weight2"
                            type="number"
                            inputMode="decimal"
                            step="0.5"
                            value={form.weight2}
                            onChange={handleChange}
                            placeholder="0.5"
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="formula">Situation</label>
                    <textarea
                        id="formula"
                        name="formula"
                        rows={3}
                        value={form.formula}
                        onChange={handleChange}
                        placeholder="Optional formula or expression"
                    />
                </div>

                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="target">Target Grade</label>
                        <input
                            id="target"
                            name="target"
                            type="number"
                            inputMode="decimal"
                            min="6.0"
                            max="8.0"
                            step="1.0"
                            value={form.target}
                            onChange={handleChange}
                            placeholder="6.0"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="threshold">Semester</label>
                        <select
                            id="frequency"
                            name="frequency"
                            value={form.semester}
                            onChange={handleChange}
                        >
                            {semester.map((f) => (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="frequency">Frequency</label>
                        <select
                            id="frequency"
                            name="frequency"
                            value={form.frequency}
                            onChange={handleChange}
                        >
                            {frequencies.map((f) => (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-field">
                        <label htmlFor="ownerArea">Major</label>
                        <select
                            id="ownerArea"
                            name="ownerArea"
                            value={form.ownerArea}
                            onChange={handleChange}
                        >
                            {areas.map((a) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-field">
                        <label htmlFor="themes">Subjects</label>
                        {themes.map((t) => (
                            <label key={t} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    id={`theme-${t}`}
                                    name="themes"
                                    value={t}
                                    checked={form.themes.includes(t)}
                                    onChange={(e) => {
                                        const updatedThemes = e.target.checked
                                            ? [...form.themes, t]
                                            : form.themes.filter((theme) => theme !== t);
                                        handleChange({ target: { name: 'themes', value: updatedThemes } });
                                    }}
                                    aria-describedby="themesHelp"
                                />
                                {t}
                            </label>
                        ))}
                        <small id="themesHelp" className="help-text">
                            Hold Ctrl/Cmd to select multiple.
                        </small>
                    </div>

                    <div className="form-field switch-field">
                        <label htmlFor="active">Status</label>
                        <label className="switch">
                            <input
                                id="active"
                                name="active"
                                type="checkbox"
                                checked={form.active}
                                onChange={handleChange}
                            />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

                <div className="actions">
                    <button type="submit" className="primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
