import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ImageList, ImageListItem } from "@mui/material";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function ProductCard({ product }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const {
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
	} = product;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						{discountPercentage}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
			/>
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
			<CardActions disableSpacing>

				<IconButton aria-label="add to shopping cart">
					<AddShoppingCartIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<ImageList
						sx={{ width: 500, height: 450 }}
						variant="woven"
						cols={3}
						gap={8}
					>
						{images.map((image, i) => (
							<ImageListItem key={i}>
								<img
									srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
									src={`${image}?w=161&fit=crop&auto=format`}
									alt={image}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</CardContent>
			</Collapse>
		</Card>
	);
}
