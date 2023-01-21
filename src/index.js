import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import Error from './Error';
import Root from './components/root/Root';
import Blog from './components/blog/Blog';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import store from './store/store';
import Price from './components/price/Price';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import CreateShop from './components/shop/CreateShop';
import LoginShop from './components/shop/LoginShop';
import ShopRoot from './components/shop/ShopRoot';
import YourShop from './components/shop/YourShop';
import FormInfos from './components/shop/FormInfos';
import FormYourShop from './components/shop/FormYourShop';
import { Provider } from 'react-redux';
import Identification from './components/shop/Identification';
import ForgetPassword from './components/shop/ForgetPassword';
import DashboardRoot from './dashboard/DashboardRoot';
import Main from './dashboard/main/Main';
import Products from './dashboard/products/Products';
import UpdateProduct from './dashboard/products/UpdateProduct';
import AddProduct from './dashboard/products/AddProduct';
import Categories from './dashboard/categories/Categories';
import Customers from './dashboard/customers/Customers';
import Requests from './dashboard/requests/Requests';
import Reports from './dashboard/reports/Reports';
import AddRequests from './dashboard/requests/AddRequests';
import Pages from './dashboard/pages/Pages';
import SettingStore from './dashboard/settingstore/SettingStore';
import DesignStore from './dashboard/designstore/DesignStore';
import SettingAccount from './dashboard/settingAccount/SettingAccount';
import FormAccount from './dashboard/settingAccount/FormAccount';
import Ratings from './dashboard/ratings/Ratings';
import Sales from './dashboard/reports/Sales';
import Product from './dashboard/reports/Product';
import Client from './dashboard/reports/Client';
import More from './dashboard/reports/More';


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "price",
        element: <Price />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "shop",
    element: <Provider store={store}><ShopRoot /></Provider>,
    children: [
      {
        index: true,
        element: <YourShop />
      },
      {
        path: "login",
        element: <LoginShop />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword title='نسيت كلمة المرور' />,
      },
      {
        path: "verify-password",
        element: <ForgetPassword title='كود تأكيد التسجيل' />,
      },
      {
        path: "create-store",
        element: <CreateShop />,
        children: [
          {
            index: true,
            element: <FormInfos />
          },
          {
            path: "your-shop-information",
            element: <FormYourShop />
          },
          {
            path: "personal-identification",
            element: <Identification />
          },
        ]
      },
    ]
  },
  {
    path: "dashboard",
    element: <Provider store={store}><DashboardRoot /></Provider>,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/add",
        element: <AddProduct />,
      },
      {
        path: "products/update",
        element: <UpdateProduct />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "requests",
        element: <Requests />
      },
      {
        path: "requests/add",
        element: <AddRequests />,
      },
      {
        path: "customers",
        element: <Customers />
      },
      {
        path: "reports",
        element: <Reports />,
        children: [
          {
            index: true,
            element: <Sales />
          },
          {
            path: "products",
            element: <Product />
          },
          {
            path: "clients",
            element: <Client />
          },
          {
            path: "more",
            element: <More />
          },
        ]
      },
      {
        path: "wallets",
        element: <h1 className="title-dashboard">المحفظة و</h1>
      },
      {
        path: "pages",
        element: <Pages />
      },
      {
        path: "ratings",
        element: <Ratings />
      },
      {
        path: "setting-store",
        element: <SettingStore />
      },
      {
        path: "design-store",
        element: <DesignStore />
      },
      {
        path: "setting-account",
        element: <SettingAccount />,
      },
      {
        path: "setting-account/change-password",
        element: <div className="setting-store setting-account">
          <FormAccount
            title="تغيير كلمة المرور"
            label1="كلمة المرور الحالية"
            label2="كلمة المرور الجديدة"
            label3="تأكيد كلمة المرور"
            type="password" />
        </div>
      },
    ]
  }

])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

