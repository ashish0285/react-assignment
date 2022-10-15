import Clock from './components/Clock'
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <Clock />
      <div className="main-container">
        <h1 className="main-heading">Timer and Post Assignment React</h1>
        <Posts />
      </div>
    </div>
  )
}

export default App
