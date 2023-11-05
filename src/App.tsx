import "./App.css"
import { useScrollToTop } from "hooks/use-scroll-to-top"
import Router from "routes/sections"

function App() {
    useScrollToTop()
    return (
        <>
            <Router />
        </>
    )
}

export default App
