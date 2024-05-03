import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
	Avatar,
	CardActionArea,
	CardHeader,
	Container,
	IconButton,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { addToBasket, removeFromBasket } from "../redux/action/basketAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function BasketCard({ basketItem }) {
	const {
		quantity,
		product: {
			id,
			title,
			description,
			price,
			discountPercentage,
			rating,
			stock,
			brand,
			category,
			thumbnail,
			images,
		},
	} = basketItem;
	const dispatch = useDispatch()
	const handleRemoveFromBasket = () => {
		dispatch(removeFromBasket(basketItem.product))
		toast.success(` ${title} deleted from basket`)
	}
	return (
		<Container>
			<Card
				sx={{
					maxWidth: 600,
					margin: "25px",
					border: "1px solid black",
				}}
			>
				<CardActionArea
					sx={{ display: "flex", justifyContent: "space-between" }}
				>
					<CardHeader title={title} />
					<CardHeader sx={{ color: "red" }} title={`Price  :${price}$`} />
				</CardActionArea>

				<CardActionArea
					sx={{
						display: "flex",
						padding: "20px",
					}}
				>
					<CardMedia
						component="img"
						height="194"
						image={thumbnail}
						alt={title}
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "20px",
					}}
				>
					<Typography variant="body2" color="text.secondary">
						Quantity : {quantity}
					</Typography>

					<IconButton aria-label="remove from shopping cart" onClick={()=> handleRemoveFromBasket()}>
					<RemoveShoppingCartIcon />
				</IconButton>

					
				</div>
			</Card>
		</Container>
	);
}
