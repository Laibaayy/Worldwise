import { Worldwiseprovider } from "./Contexts/WorlwiseContext"
import { UserAuthContext } from "./Contexts/UserAuthContext"
import PrivateRoute from "./Components/Privateroute"
// import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Product from "./Components/Product"
import Pricing from "./Components/Pricing"
import Error from "./Components/Error"
import Applayout from "./Components/Applayout"
import Login from "./Components/Login"
import Citylist from "./Components/Citylist"
import Countrylist from "./Components/Countrylist"
import Citydetail from "./Components/Citydetail"
import Form from "./Components/Form"
// const Home = lazy(() => import("./Components/Home"))
// const Product = lazy(() => import("./Components/Product"))
// const Pricing = lazy(() => import("./Components/Pricing"))
// const Error = lazy(() => import("./Components/Error"))
// const Applayout = lazy(() => import('./Components/Applayout'))
// const Login = lazy(() => import("./Components/Login"))
// const Citylist = lazy(() => import("./Components/Citylist"))
// const Countrylist = lazy(() => import("./Components/Countrylist"))
// const Citydetail = lazy(() => import("./Components/Citydetail"))
// const Form = lazy(() => import("./Components/Form"))
const App = () => {



  return (
    <>
      <UserAuthContext>
        <Worldwiseprovider >
          <BrowserRouter>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="app" element={<PrivateRoute>  <Applayout /></PrivateRoute>} >
                {/* <Route index element={<Citylist cityy={cityy} isloading={isloading} />} /> */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities/:id" element={<Citydetail />} />
                <Route path="cities" element={<Citylist />} />
                <Route path="countries" element={<Countrylist />} />
                <Route path="form" element={<Form />} />

              </Route>
              <Route path="Product" element={<Product />} />
              <Route path="Pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Routes>
            {/* </Suspense> */}
          </BrowserRouter>
        </Worldwiseprovider>
      </UserAuthContext>
    </>
  )
}

export default App
