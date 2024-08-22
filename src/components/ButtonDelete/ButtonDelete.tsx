import { useState } from 'react';
import './ButtonDelete.css';
import { MenuItem, OrderItem } from '../../types';

type TypesProps = {
	removeItem: (id: MenuItem['id']) => void;
	item: OrderItem;
}

export const ButtonDelete = ({ removeItem, item }: TypesProps) => {
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [itemIdToRemove, setItemIdToRemove] = useState<MenuItem['id'] | null>(null);

	const handleClick = () => {
		setIsRunning(true);
		setItemIdToRemove(item.id);  
	};

	const handleAnimationEnd = () => {
		if (itemIdToRemove !== null) {
			removeItem(itemIdToRemove);  
			setItemIdToRemove(null);      
		}
		setIsRunning(false);
	};

	return (
		<button
			id="delete"
			className="del-btn"
			type="button"
			aria-label="Delete"
			disabled={isRunning}
			data-running={isRunning}
			onClick={handleClick}
		>
			<svg className="del-btn__icon" viewBox="0 0 48 48" width="48px" height="48px" aria-hidden="true">
				<clipPath id="can-clip">
					<rect className="del-btn__icon-can-fill" x="5" y="24" width="14" height="11" />
				</clipPath>
				<g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(12,12)">
					<g className="del-btn__icon-lid">
						<polyline points="9,5 9,1 15,1 15,5" />
						<polyline points="4,5 20,5" />
					</g>
					<g className="del-btn__icon-can">
						<g strokeWidth="0">
							<polyline id="can-fill" points="6,10 7,23 17,23 18,10" />
							<use clipPath="url(#can-clip)" href="#can-fill" fill="#fff" />
						</g>
						<polyline points="6,10 7,23 17,23 18,10" />
					</g>
				</g>
			</svg>
			<span
				className="del-btn__letters"
				aria-hidden="true"
				data-anim
				onAnimationEnd={handleAnimationEnd}  // Usando onAnimationEnd directamente
			>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">D</span>
				</span>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">e</span>
				</span>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">l</span>
				</span>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">e</span>
				</span>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">t</span>
				</span>
				<span className="del-btn__letter-box">
					<span className="del-btn__letter">e</span>
				</span>
			</span>
		</button>
	);
};
