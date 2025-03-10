<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle de Planos</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        button {
            margin: 5px;
            padding: 5px 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Controle de Planos</h2>
    <input type="text" id="planName" placeholder="Digite o nome do plano..." oninput="fillPlanData()">
    <input type="text" id="cardBrand" placeholder="Digite a bandeira do cartão...">
    <button onclick="addPlan()">Adicionar Plano</button>
    <table id="planTable">
        <thead>
            <tr>
                <th>Nome do Plano</th>
                <th>Bandeira do Cartão</th>
                <th>Data de Cadastro</th>
                <th>Débito</th>
                <th>Crédito à vista</th>
                <th>Crédito 2x - 6x</th>
                <th>Crédito 7x - 12x</th>
                <th>Crédito 13x - 21x</th>
                <th>Taxa de Antecipação</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody id="planBody">
        </tbody>
    </table>
    <script>
        function addPlan() {
            let planName = document.getElementById("planName").value;
            let cardBrand = document.getElementById("cardBrand").value;
            if (!planName || !cardBrand) {
                alert("Por favor, insira o nome do plano e a bandeira do cartão.");
                return;
            }
            let table = document.getElementById("planBody");
            let row = table.insertRow();
            let date = new Date().toLocaleDateString();
            
            let cells = [planName, cardBrand, date, "1.40%", "2.20%", "2.60%", "2.80%", "3.20%", "1.75%"];
            cells.forEach((text, i) => {
                let cell = row.insertCell(i);
                cell.textContent = text;
            });
            
            let actionCell = row.insertCell(cells.length);
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Remover";
            deleteBtn.onclick = function () { row.remove(); };
            actionCell.appendChild(deleteBtn);
            
            document.getElementById("planName").value = "";
            document.getElementById("cardBrand").value = "";
        }

        function fillPlanData() {
            let input = document.getElementById("planName").value.toLowerCase();
            let table = document.getElementById("planBody").getElementsByTagName("tr");
            
            for (let row of table) {
                let planName = row.getElementsByTagName("td")[0].textContent.toLowerCase();
                if (input && planName.includes(input)) {
                    document.getElementById("planName").value = row.getElementsByTagName("td")[0].textContent;
                    document.getElementById("cardBrand").value = row.getElementsByTagName("td")[1].textContent;
                    return;
                }
            }
        }
    </script>
</body>
</html>
