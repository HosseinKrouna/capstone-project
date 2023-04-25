import Modal from "./Modal";
import styled from "styled-components";

export default function ModalDelete({
	entry,
	showModalDelete,
	handleDelete,
	handleClose,
}) {
	return (
		<Modal show={showModalDelete}>
			<div>
				<div>Are you sure you want to delete this {entry}?</div>
				<div>
					<button onClick={handleClose}>No</button>
					<button
						onClick={() => {
							handleDelete();
						}}
					>
						Yes
					</button>
				</div>
			</div>
		</Modal>
	);
}
