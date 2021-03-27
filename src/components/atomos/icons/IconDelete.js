import { AiFillDelete } from "react-icons/ai";

const IconDelete = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className="font-bold text-3xl text-gray-300 hover:text-primario-red cursor-pointer"
		>
			<AiFillDelete />
		</span>
	);
};

export default IconDelete;
