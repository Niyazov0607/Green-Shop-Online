import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Header from "../modules/Header/Header";
import AboutCard from "../modules/AboutCard/AboutCard";

const MainRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    element={<AboutCard />}
                    path="/modules/AboutCard/AboutCard/:category/:id"
                />
            </Routes>
        </div>
    );
};

export default MainRouter;
