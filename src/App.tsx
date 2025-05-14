import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import ProductDetail from './components/ProductDetails';
import Categories from './components/Categories';
import Prescriptions from './components/Prescriptions';
import Contact from './components/Contact';
import HealthInfo from './components/HealthInfo';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/products/:id",
          element: <ProductDetail />
        },
        {
          path: "/categories",
          element: <Categories />
        },
        {
          path: "/prescriptions",
          element: <Prescriptions />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/health-info",
          element: <HealthInfo />
        }
      ]
    }
  ])

  return (
    <>
      <CartProvider>

        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </>
  );
}

export default App
