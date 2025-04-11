import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CounterComponent from './Components/CounterComponent'
import TodoList from './Components/TodoList'
import ToggleText from './Components/ToggleText'
import CharacterCountTextarea from './Components/CharacterCountTextarea'
import LiveSearch from './Components/LiveSearch'
import UserList from './Components/UserList'
import LoginForm from './Components/LoginForm'
import Accordion from './Components/Accordion'
import ThemeToggle from './Components/ThemeToggle'
import Timer from './Components/Timer'
import Navbar from './Navbar'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/counter" element={<CounterComponent />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/toggle-text" element={<ToggleText />} />
                <Route path="/textarea" element={<CharacterCountTextarea />} />
                <Route path="/search" element={<LiveSearch />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/theme" element={<ThemeToggle />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
    )
}

export default App
