$(document).ready(() => {
  $(".notf").hover(function () {
    $(this).find(".notList").slideToggle(100);
  });
  $(".srchBar svg").click(function () {
    if (window.innerWidth < 600) {
      $(".srchBar").toggleClass("active");
    }
  });
  $(".profOpt p svg").click(function () {
    $(".profOpt .oPt").slideToggle(100);
  });
  const data = {
    labels: ["Legend 1", "Legend 2", "Legend 3", "Legend 4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [15, 35, 30, 20],
        backgroundColor: [
          "#51F7F7", // Red
          "#5B9CFA", // Blue
          "#8CE695", // Yellow
          "#FFB74D", // Green
        ],
        borderColor: [
          "#ffffff", // Red
          "#ffffff", // Blue
          "#ffffff", // Yellow
          "#ffffff",
        ],
        borderWidth: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [
      {
        id: "custom-legend",
        afterUpdate: (chart) => {
          const legendContainer = document.getElementById("chartLegend");
          legendContainer.innerHTML = "";

          chart.data.labels.forEach((label, index) => {
            const color = chart.data.datasets[0].backgroundColor[index];

            const legendItem = document.createElement("div");
            legendItem.classList.add("legend-item");

            const colorBox = document.createElement("span");
            colorBox.classList.add("legend-color");
            colorBox.style.backgroundColor = color;

            const labelText = document.createElement("span");
            labelText.textContent = label;

            legendItem.appendChild(colorBox);
            legendItem.appendChild(labelText);

            legendContainer.appendChild(legendItem);
          });
        },
      },
    ],
  };

  const ctx = document.getElementById("myDoughnutChart").getContext("2d");
  new Chart(ctx, config);

  const data1 = {
    labels: ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5"],
    datasets: [
      {
        label: "Dataset 1",
        data: [30, 20, 15, 25, 10],
        backgroundColor: [
          "#FFB74D",
          "#FFB74D",
          "#FFB74D",
          "#FFB74D",
          "#FFB74D",
        ],
        borderColor: ["#FFB74D", "#FFB74D", "#FFB74D", "#FFB74D", "#FFB74D"],
        borderWidth: 1,
      },
    ],
  };

  const config1 = {
    type: "bar",
    data: data1,
    options: {
      indexAxis: "y", // Horizontal bars
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Disable default legend to use custom one
        },
      },
      scales: {
        x: {
          display: false, // Hide x-axis labels and grid lines
          beginAtZero: true,
          grid: {
            display: false, // Hide x-axis grid lines
          },
          border: {
            display: false, // Hide x-axis border line
          },
          ticks: {
            display: false, // Hide x-axis labels
          },
        },
        y: {
          grid: {
            display: false, // Hide y-axis grid lines
          },
          border: {
            display: false, // Hide y-axis border line
          },
          ticks: {
            display: true, // Show y-axis labels
            color: "black", // Optional: Change label color if needed
            font: {
              size: 12, // Optional: Adjust font size
            },
            padding: 10,
          },
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 10,
          bottom: 10,
        },
      },
      // Adjust bar and category percentage to add gap
      barPercentage: 0.6, // Adjust bar width
    },
    plugins: [
      {
        id: "custom-legend",
        afterUpdate: (chart) => {
          const legendContainer = document.getElementById("chartLegend1");
          legendContainer.innerHTML = "";

          const legendItem = document.createElement("div");
          legendItem.classList.add("legend-item");

          const colorBox = document.createElement("span");
          colorBox.classList.add("legend-color");
          colorBox.style.backgroundColor = "#FFB74D"; // Color of legend marker

          const labelText = document.createElement("span");
          labelText.textContent = "Legends"; // Label text for the legend

          legendItem.appendChild(colorBox);
          legendItem.appendChild(labelText);

          legendContainer.appendChild(legendItem);
        },
      },
    ],
  };

  const ctx1 = document
    .getElementById("myHorizontalBarChart1")
    .getContext("2d");
  new Chart(ctx1, config1);

  $(".hmbrg").click(() => {
    if (window.innerWidth < 600) {
      let vll = parseInt($(".sideBar").css("left").split("px")[0]);
      if (vll < 0) {
        $(".sideBar").animate({ left: "0%" });
        $(".hmbrg").addClass("hbrApd");
      } else {
        $(".sideBar").animate({ left: "-100%" });
        $(".hmbrg").removeClass("hbrApd");
      }
    } else if (window.innerWidth < 900 && window.innerWidth > 600) {

    }
  });
});
