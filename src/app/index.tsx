import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SignInPage from "@/app/routes/SignInPage";
import SignUpPage from "@/app/routes/SignUpPage";
import OTPVerifyPage from "@/app/routes/OTPVerifyPage";
import ChooseSpecialistPage from "@/features/chooseSpecialist/components/ChooseSpecialistPage";
import AuthLayout from "@/components/layout/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SignInPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/otp-verify", element: <OTPVerifyPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/choose-specialist",
        element: <ChooseSpecialistPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />, // ← guard wraps everything below
    children: [],
  },
]);
