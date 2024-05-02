import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route to="/" element={<Home />} />
				<Route to="/notFound" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
