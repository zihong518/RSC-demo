import React from "react";
import BarChart from "@/components/bar-chart";
import fs from "fs";
import path from "path"
const colorSet = [
  "#00b4d8",
  "#3b009a",
  "#560bad",
  "#7209b7",
  "#b5179e",
  "#ed2c84",
  "#ff89bf",
  "#ffbbda",
  "#ffcf4c",
  "#d89504",
  "#c26a00",
  "#e85602",
];
interface ProcessData {
  processName: string;
    usage: number;
}
export default function Home() {
    const filePath = path.join(process.cwd(),"data.json");
    const json = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(json);
    const filterData = data.cpuUsageTable.tableData.slice(0, 10);
    const backgroundColor = filterData.map((_: ProcessData, index: number) =>
      index < colorSet.length ? colorSet[index] : "#cccccc"
    );
    return (
      <div className="w-3/4 mx-auto mt-10">
        <BarChart
          labels={filterData.map((row: ProcessData) => row.processName)}
          values={filterData.map((row: ProcessData) => row.usage)}
          colorSet={backgroundColor}
        />
      </div>
    );
}
