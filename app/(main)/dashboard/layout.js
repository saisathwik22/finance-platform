import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const Dashboard = () => {
  return (
    <div className='px-5'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-6xl mt-7 font-bold blue-gradient-title tracking-tight'>
          Dashboard
        </h1>
      </div>

      {/* Dashboard Page */}
      <Suspense
        fallback={<BarLoader className='mt-4' width={"100%"} color='#9333ea' />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default Dashboard;
