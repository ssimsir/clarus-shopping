import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Basket from "../pages/Basket";
import { ToastContainer } from "react-toastify";

const AppRouter = () => {
	return (
		<div>
			<ToastContainer position="top-right"/>
			<Routes>
				<Route path="/basket" element={<Basket />} />
				<Route path="/" element={<Home />} />
				<Route path="/notFound" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
