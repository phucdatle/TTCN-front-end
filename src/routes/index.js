import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import TypeProducsPage from "../pages/TypeProductsPage/TypeProducsPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from  "../pages/SignUpPage/SignUpPage"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage"

export const routes = [
    {
       path: '/',
       page: HomePage, 
       isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
   },
   {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true 
   },
   {
         path: '/type',
         page: TypeProducsPage,
         isShowHeader: true 
   },
   {
         path: '/sign-in',
         page: SignInPage,
         isShowHeader: true 
   },
   {
         path: '/sign-up',
         page: SignUpPage,
         isShowHeader: true 
   },
   {
         path: '/product-detail',
         page: ProductDetailPage,
         isShowHeader: true 
   },


     {
         path: '*',
         page: NotFoundPage 
     },
]