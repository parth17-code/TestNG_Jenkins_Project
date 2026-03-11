import { useEffect, useState } from 'react'
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=8'

function ItemCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li>
      <p>{item.title}</p>
      <p>{item.completed ? 'Completed' : 'Pending'}</p>
      <button type="button" onClick={() => setIsExpanded((current) => !current)}>
          {isExpanded ? 'Hide details' : 'Show details'}
      </button>

      {isExpanded ? (
        <div>
          <p>Item ID: {item.id}</p>
          <p>User ID: {item.userId}</p>
        </div>
      ) : null}
    </li>
  )
}

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadItems() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()

        if (!ignore) {
          setItems(data)
        }
      } catch (fetchError) {
        if (!ignore) {
          setError(fetchError instanceof Error ? fetchError.message : 'Unable to load items.')
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadItems()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <main>
      <section>
        <h1>Experiment $ WEBL</h1>
      </section>

      {loading ? <p>Loading items...</p> : null}
      {error ? <p>{error}</p> : null}

      {!loading && !error ? (
        <section>
          <ul>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
          </ul>
        </section>
      ) : null}
    </main>
  )
}

export default App
