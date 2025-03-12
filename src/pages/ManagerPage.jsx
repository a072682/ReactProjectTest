import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";

// 註冊 Chart.js 模組
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

function ManagerPage() {
  // 資料
  const barData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [{ label: "銷售額", data: [12, 19, 3, 5, 2], backgroundColor: "rgba(54, 162, 235, 0.6)" }],
  };

  const lineData = {
    labels: ["1月", "2月", "3月", "4月", "5月"],
    datasets: [{ label: "訪客數", data: [30, 45, 28, 50, 38], borderColor: "rgba(255, 99, 132, 1)", fill: false }],
  };

  const pieData = {
    labels: ["紅", "藍", "黃"],
    datasets: [{ data: [300, 50, 100], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
  };

  return (
    <div className="container py-100 mt-150">
      <h2 className="text-center mb-4">數據圖表範例</h2>

      {/* 上方兩個圖表 */}
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="text-center">柱狀圖</h5>
            <Bar data={barData} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="text-center">折線圖</h5>
            <Line data={lineData} />
          </div>
        </div>
      </div>

      {/* 下方獨立圖表 */}
      <div className="row mt-4">
        <div className="col-6 mx-auto">
          <div className="card p-3">
            <h5 className="text-center">圓餅圖</h5>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerPage;
