import { Children, Fragment } from "react";
import IconAlert from "../../atomos/icons/IconAlert";

const CardAlerta = ({ accionCard, cerrarCard, atributos, children }) => {
	return (
		<Fragment>
			<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div className="sm:flex sm:items-start">
					<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
						<IconAlert />
					</div>
					<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3
							className="text-lg leading-6 font-medium text-gray-900"
							id="modal-headline"
						>
							{atributos.titulo}
						</h3>
						<div className="mt-2">{children}</div>
					</div>
				</div>
			</div>
			<div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-white">
				<button
					onClick={accionCard}
					type="button"
					className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
				>
					{atributos.accion}
				</button>
				<button
					onClick={() => cerrarCard(false)}
					type="button"
					className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				>
					{atributos.cancelar}
				</button>
			</div>
		</Fragment>
	);
};

export default CardAlerta;
