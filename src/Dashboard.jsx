import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Sidebar = () => (
  <aside className="bg-black w-16 min-h-screen flex flex-col items-center py-4">
    <div className="bg-white rounded-full w-8 h-8 mb-8"></div>
    <div className="bg-red-600 w-8 h-8 mb-4"></div>
    <div className="bg-gray-700 w-8 h-8 mb-4"></div>
    <div className="bg-gray-700 w-8 h-8 mb-4"></div>
    <div className="mt-auto bg-gray-700 w-8 h-8"></div>
  </aside>
);

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white">
    <div className="flex items-center">
      <img src="/logo.jpg" alt="Rapid Secure Logo" className="h-6 mr-2" />
      <h1 className="text-xl font-bold">Rapid Secure.</h1>
    </div>
    <div className="flex items-center">
      <input type="text" placeholder="Search" className="mr-4 p-2 border rounded" />
      <button className="mr-4 p-2 bg-gray-100 rounded">Search with AI</button>
      <div className="flex items-center">
        <img src="/avatar.jpeg" alt="User Avatar" className="h-8 w-8 rounded-full mr-2" />
        <span>Matt Andrew</span>
      </div>
    </div>
  </header>
);

const UpgradeBar = () => (
  <div className="bg-gradient-to-r from-red-600 to-pink-500 text-white p-3 flex justify-between items-center">
    <div className="flex items-center">
      <span className="mr-2">⏱️</span>
      <span>Upgrade to premium, and get more details features!</span>
    </div>
    <button className="bg-white text-black px-4 py-1 rounded">Upgrade Now</button>
  </div>
);

const DateRangePicker = () => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg">
    <h2 className="text-lg font-semibold">Select Date Range</h2>
    <div className="flex">
      <input type="date" value="2024-07-19" className="border rounded p-2 mr-2" />
      <span className="mr-2">To</span>
      <input type="date" value="2024-08-22" className="border rounded p-2" />
    </div>
  </div>
);

const MetricCard = ({ title, value, period }) => (
  <div className="bg-gray-900 text-white p-4 rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm">{title}</h3>
      <span className="text-xs">...</span>
    </div>
    <div className="flex items-center">
      <span className="text-red-500 mr-2">🔴</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <div className="flex justify-between items-center mt-2">
      <span className="text-xs text-gray-400">{period}</span>
      <span className="text-xs bg-gray-800 px-2 py-1 rounded">This Month</span>
    </div>
  </div>
);

const BarChartComponent = () => {
  const data = [
    { date: '20 Aug', pii: 45, data: 80, phishing: 60, unsecured: 70 },
    { date: '21 Aug', pii: 70, data: 45, phishing: 90, unsecured: 80 },
    { date: '22 Aug', pii: 50, data: 70, phishing: 45, unsecured: 65 },
    { date: '23 Aug', pii: 80, data: 75, phishing: 50, unsecured: 45 },
    { date: '24 Aug', pii: 30, data: 40, phishing: 70, unsecured: 55 },
    { date: '25 Aug', pii: 90, data: 35, phishing: 60, unsecured: 80 },
    { date: '26 Aug', pii: 70, data: 50, phishing: 55, unsecured: 45 },
    { date: '27 Aug', pii: 50, data: 80, phishing: 45, unsecured: 75 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Attack Type</h2>
        <select className="border rounded p-1">
          <option>Aug 20 - Present</option>
        </select>
      </div>
      <div className="h-64">
        <BarChart width={600} height={250} data={data}>
          <Bar dataKey="pii" fill="#FF0000" />
          <Bar dataKey="data" fill="#FF9999" />
          <Bar dataKey="phishing" fill="#000000" />
          <Bar dataKey="unsecured" fill="#CCCCCC" />
        </BarChart>
      </div>
      <div className="flex justify-between mt-4">
        <span className="flex items-center"><span className="w-3 h-3 bg-red-600 inline-block mr-1"></span> PII Security</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-red-300 inline-block mr-1"></span> Data Exfiltration</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-black inline-block mr-1"></span> Phishing</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-gray-400 inline-block mr-1"></span> Unsecured Credentials</span>
      </div>
    </div>
  );
};

const PieChartComponent = () => {
  const data = [
    { name: 'PII Security', value: 8 },
    { name: 'Data Exfiltration', value: 6 },
    { name: 'Phishing', value: 7 },
    { name: 'Unsecured Credentials', value: 7 },
  ];
  const COLORS = ['#FF0000', '#FF9999', '#000000', '#CCCCCC'];

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Attack Type</h2>
        <span>❓ Any Help?</span>
      </div>
      <div className="h-64 flex justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx={125}
            cy={125}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="w-3 h-3 inline-block mr-1" style={{backgroundColor: COLORS[index]}}></span>
            {item.name} ({item.value})
          </span>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div className="flex bg-gray-100 min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <UpgradeBar />
      <main className="p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Overview Options</h2>
            <select className="w-full p-2 bg-gray-900 text-white rounded">
              <option>Attack Overview</option>
            </select>
          </div>
          <DateRangePicker />
        </div>
        <div className="grid grid-cols-4 gap-6 mb-6">
          <MetricCard title="Total Prompt" value="126" period="Prompt" />
          <MetricCard title="High Risk Prompt" value="15" period="Prompt" />
          <MetricCard title="Total Prompt" value="126" period="Prompt" />
          <MetricCard title="Low or No Risk Prompt" value="10" period="Prompt" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <BarChartComponent />
          <PieChartComponent />
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;