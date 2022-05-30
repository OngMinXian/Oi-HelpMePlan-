import React from "react"
import Signup from "./Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; //Switch replaced with Routes
import Today from "./Today";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import DashBoard from "./Dashboard";
import ProgressReport from "./ProgressReport";
import Profile from "./Profile"
import Settings from "./Settings"
import CreateUserDoc from "./CreateUserDoc"
import MonthYear from "./MonthYear"

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={
                            <PrivateRoute>
                                <Today />
                            </PrivateRoute>} />
                        <Route path="/update-profile" element={
                            <PrivateRoute>
                                <UpdateProfile />
                            </PrivateRoute>} />
                        <Route path="/signup" exact element={<Signup />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/forgot-password" exact element={<ForgotPassword />} />
                        <Route path="/dashboard" exact element={<DashBoard />} />\
                        <Route path="/today" exact element={<Today />} />
                        <Route path="/month-year" exact element={<MonthYear />} />
                        <Route path="/progress-report" exact element={<ProgressReport />} />
                        <Route path="/profile" exact element={<Profile />} />
                        <Route path="/create-user-doc" exact element={<CreateUserDoc />} />
                        <Route path="/settings" exact element={<Settings />} />
                    </Routes>
                </AuthProvider>

            </Router>
        </div>
    )
}

export default App;