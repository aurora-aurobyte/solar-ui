import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import App from "./App.tsx"
import { Provider } from "react-redux"
import { store } from "store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <BrowserRouter>
            <Provider store={store}>
                <Suspense>
                    <App />
                </Suspense>
            </Provider>
        </BrowserRouter>
    </HelmetProvider>
)
