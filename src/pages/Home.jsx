import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import CategoryBar from "../components/CategoryBar";
import NavBar from "../components/NavBar";
const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	const getData = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				`https://dummyjson.com/products/search?q=${search}`
			);

			setProducts(data.products);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [search]);

	return (
		<div>
<NavBar/>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
         
         <CategoryBar sx={{mx:"auto"}}  />
			<Container maxWidth="lg">
				
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					rowGap={"10px"}
				>
					{products.map((product) => (
						<Grid item xs={2} sm={4} md={4} key={product.id}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
         </Box>
		</div>
	);
};

export default Home;
