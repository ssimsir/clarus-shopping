import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import FiiledBasketTotal from "../components/FiiledBasketTotal";
import EmptyBasketTotal from "../components/EmptyBasketTotal";

const Basket = () => {
	const { basketItems } = useSelector((state) => state.basket);
	const basketTotal = basketItems.reduce(
		(acc, curr) => acc + curr.quantity * curr.product.price,
		0
	);

	return (
		<div>
			{basketItems.length ? (
				<FiiledBasketTotal basketTotal={basketTotal} />
			) : (
				<EmptyBasketTotal />
			)}
			{basketItems.map((basketItem) => (
				<BasketCard key={basketItem.product.id} basketItem={basketItem} />
			))}
		</div>
	);
};

export default Basket;
