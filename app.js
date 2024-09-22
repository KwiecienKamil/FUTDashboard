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

const statsContentDiv = document.querySelector(
  ".app_dashboard_stats_wrapper_content"
);

for (let i = 0; i > loadStats.length; i++) {
  statsContentDiv.appendChild("div");
}
