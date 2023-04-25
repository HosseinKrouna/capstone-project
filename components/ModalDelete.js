// import Modal from "./Modal";
// import styled from "styled-components";

// export default function ModalDelete({
// 	entry,
// 	showModalDelete,
// 	handleDelete,
// 	handleClose,
// }) {
// 	return (
// 		<Modal show={showModalDelete}>
// 			<div>
// 				<div>Are you sure you want to delete this {entry}?</div>
// 				<div>
// 					<button onClick={handleClose}>No</button>
// 					<button
// 						onClick={() => {
// 							handleDelete();
// 						}}
// 					>
// 						Yes
// 					</button>
// 				</div>
// 			</div>
// 		</Modal>
// 	);
// }

export default function ModalDelete() {
	return (
		<>
			<div>
				<button onclick="document.getElementById('id01').style.display='block'">
					Open Modal
				</button>

				<div id="id01" class="modal">
					<span
						onclick="document.getElementById('id01').style.display='none'"
						class="close"
						title="Close Modal"
					>
						&times;
					</span>
					<form class="modal-content" action="/action_page.php">
						<div class="container">
							<h1>Delete Account</h1>
							<p>Are you sure you want to delete your account?</p>

							<div class="clearfix">
								<button type="button" class="cancelbtn">
									Cancel
								</button>
								<button type="button" class="deletebtn">
									Delete
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
