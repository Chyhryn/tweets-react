import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Tweets } from "./pages/Tweets/Tweets";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
