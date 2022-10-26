import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Course from "../../Pages/Course/Course/Course";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Blog/Blog/Blog";
import Faq from "../../Pages/FAQ/FAQ/Faq";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Error from "../../Pages/Error/Error/Error";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/course_detail/:id",
        element: (
          <PrivateRoutes>
            <CourseDetails></CourseDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course_detail/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
