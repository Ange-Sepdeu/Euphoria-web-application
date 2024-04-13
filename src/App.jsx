import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ROUTES} from "./routes/routes"
import Footer from "./components/Footer";

function App() {
 
  return (
    <>
 <BrowserRouter>
          <Routes>
          {[...ROUTES].map((route, index) => (
            <Route
              key={index.toString() + route?.path}
              path={route?.route}
              element={
                  <>
                  { (route.route != "login" && route.route != "register") && <Header />}
                    <route.element />
                  { (route.route != "login" && route.route != "register") && <Footer />}
                  </>
              }
            />
          ))}
          </Routes>
        </BrowserRouter>     
    </>
  )
}

export default App
