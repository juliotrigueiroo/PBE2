document.addEventListener("DOMContentLoaded", () => {

	const form = document.getElementById("cadastroEnderecoForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const numero = document.getElementById("Numero").value;
		const rua = document.getElementById("Rua").value;
		const endereco = document.getElementById("Endereco").value;
		const cidade = document.getElementById("Cidade").value;
		const cep = document.getElementById("Cep").value;
		const bairro = document.getElementById("Bairro").value;
		const estado = document.getElementById("Estado").value;
		const complemento = document.getElementById("Complemento").value;

		try {
			const response = await fetch("http://localhost:8080/cadastroendereco", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					numero,
					rua,
					endereco,
					cep,
					bairro, 
					cidade, 
					estado,
					complemento
				}),
			});

			if (response.ok) {
				alert("Endereço cadastrado com sucesso!");
				

			} else {
				alert("Erro ao cadastrar o endereço");
			}
		} catch (error) {
			console.error("Erro ao cadastrar o endereço:", error)
		}
	})
})
