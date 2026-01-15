import React from "react";
import BarChart from "@/components/bar-chart";
import UsersTable from "@/components/userTable/user-table";
import fs from "fs";
import path from "path"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Server-side Data Fetching with Client-side Interactivity
          </h1>
        </div>
      <div className="mt-10">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>Chart demo</CardTitle>
              </div>
              <CardDescription>Using file system in Server Component to read data, show chart in Client Component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <BarChart
                labels={filterData.map((row: ProcessData) => row.processName)}
                values={filterData.map((row: ProcessData) => row.usage)}
                colorSet={backgroundColor}
              />
              <div className="space-y-2">
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Data fetched from local file system using fs module in Server Component</li>
                  <li>• Chart rendered in Client Component using react-chartjs-2</li>
                  <li>• Demonstrates combining server-side data fetching with client-side interactivity</li>
                </ul>
              </div>

            </CardContent>
          </Card>
      </div>
      <div className="mt-10">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>Users Table demo</CardTitle>
              </div>
              <CardDescription>Using DB to fetch user data in Server Component, edit user data in Client Component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <UsersTable />
              <div className="space-y-2">
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Data fetched from database in Server Component</li>
                  <li>• User data can be edited in Client Component using React hooks</li>
                  <li>• Demonstrates combining server-side data fetching with client-side interactivity</li>
                </ul>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    );
}
