// Obtém o contexto do canvas
const ctx = document.getElementById("projectPerformanceChart").getContext("2d");

// Cria o gráfico
new Chart(ctx, {
  type: "line", // Tipo de gráfico (linha, barra, pizza, etc.)
  data: {
    labels: ["January", "February", "March", "April", "May"], // Labels do eixo X
    datasets: [
      {
        label: "Tasks Completed",
        data: [10, 20, 15, 30, 25], // Valores do eixo Y
        borderColor: "#709b90", // Cor da linha
        backgroundColor: "rgba(112, 155, 144, 0.2)", // Cor de preenchimento
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true, // Gráfico responsivo
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Tasks",
        },
        beginAtZero: true, // Começa no zero
      },
    },
  },
});
