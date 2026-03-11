import { useState } from 'react'
import './App.css'

const initialForm = {
  name: '',
  email: '',
  age: '',
  course: '',
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [result, setResult] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const ageNumber = Number(formData.age)
    const ageGroup =
      ageNumber >= 18 ? 'eligible for advanced training' : 'eligible for beginner training'

    setResult({
      name: formData.name,
      email: formData.email,
      course: formData.course,
      age: ageNumber,
      ageGroup,
    })
  }

  function handleReset() {
    setFormData(initialForm)
    setResult(null)
  }

  return (
    <main className="container">
      <h1>User Data Form</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <label>
          Course
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>

        <div className="actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {result ? (
        <section className="result">
          <h2>Processed Result</h2>
          <p>Name: {result.name}</p>
          <p>Email: {result.email}</p>
          <p>Age: {result.age}</p>
          <p>Course: {result.course}</p>
          <p>Status: {result.ageGroup}</p>
        </section>
      ) : null}
    </main>
  )
}

export default App
