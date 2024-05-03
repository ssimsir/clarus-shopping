import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notFound" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
