import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Tweets } from "./pages/Tweets/Tweets";
import { NotFound } from "./pages/NotFound/NotFound";
import "./App.css";
import { Registration } from "./pages/Registration/Registration";
import { Login } from "./pages/Login/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
