import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";
import { Profile } from "../pages/Profile/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:username" element={<Profile/>} />
    </Routes>
  );
};
