const loadStats = [
  {
    title: "Match record",
    stat: "0-0",
  },
  {
    title: "Win percentage",
    stat: "75%",
  },
];

// Statistics component
const statsContentDiv = document.querySelector(".app_dashboard_stats_wrapper");

for (let i = 0; i < loadStats.length; i++) {
  const statDiv = document.createElement("div");

  statDiv.innerHTML = `<h5>${loadStats[i].title}</h5> <span>${loadStats[i].stat}<span>`;
  statDiv.classList.add("app_dashboard_stats_wrapper_content");
  statsContentDiv.appendChild(statDiv);
}
