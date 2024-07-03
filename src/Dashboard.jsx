import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search,  HelpCircle } from 'lucide-react';

const Sidebar = () => (
    <aside className="bg-black w-16 min-h-screen flex flex-col items-center py-4">
        <div className="bg-white rounded-full w-8 h-8 mb-8 flex items-center justify-center text-black font-bold">a</div>
        <div className="bg-red-600 w-8 h-8 mb-4 rounded flex items-center justify-center text-white">27</div>
        <div className="bg-gray-800 w-8 h-8 mb-4 rounded flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </div>
        <div className="bg-gray-800 w-8 h-8 mb-4 rounded flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
        </div>
        <div className="mt-auto bg-gray-800 w-8 h-8 rounded flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
        </div>
    </aside>
);

const Header = () => (
    <header className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
            <svg className="h-6 w-6 mr-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-xl font-bold">Rapid Secure.</h1>
        </div>
        <div className="flex items-center">
            <div className="relative mr-4">
                <input type="text" placeholder="Search" className="pl-8 pr-4 py-2 border rounded-full bg-gray-100" />
                <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="mr-4 px-4 py-2 bg-gray-100 rounded-full flex items-center">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Search with AI
            </button>
            <div className="flex items-center">
                <img src="https://i.pravatar.cc/40?img=8" alt="User Avatar" className="h-8 w-8 rounded-full mr-2" />
                <span>Matt Andrew</span>
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </header>
);

const UpgradeBar = () => (
    <div className="bg-gradient-to-r from-red-600 to-pink-500 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Upgrade to premium, and get more details features!</span>
        </div>
        <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Upgrade Now</button>
    </div>
);

const OverviewOptions = () => (
    <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Overview Options</h2>
            <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
        </div>
        <select className="w-full p-2 bg-gray-900 text-white rounded-md">
            <option>Attack Overview</option>
        </select>
        <p className="text-sm text-gray-500 mt-2">Risk Overview</p>
    </div>
);

const DateRangePicker = () => (
    <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Select Date Range</h2>
            <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
        </div>
        <div className="flex space-x-4">
            <div className="flex-1">
                <input type="date" value="2024-07-19" className="w-full border rounded-md p-2" />
            </div>
            <span className="flex items-center">To</span>
            <div className="flex-1">
                <input type="date" value="2024-08-22" className="w-full border rounded-md p-2" />
            </div>
        </div>
    </div>
);

const MetricCard = ({ title, value, period, icon }) => (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">{title}</h3>
            <button className="text-gray-400 hover:text-gray-200">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
        </div>
        <div className="flex items-center">
            {icon}
            <span className="text-2xl font-bold ml-2">{value}</span>
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
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Attack Type</h2>
                <select className="border rounded p-1 text-sm">
                    <option>Aug 20 - Present</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pii" fill="#FF0000" />
                    <Bar dataKey="data" fill="#FF9999" />
                    <Bar dataKey="phishing" fill="#000000" />
                    <Bar dataKey="unsecured" fill="#CCCCCC" />
                </BarChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-between mt-4 text-sm">
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
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Attack Type</h2>
                <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Any Help?
                </button>
            </div>
            <div className="flex justify-center">
                <ResponsiveContainer width={250} height={250}>
                    <PieChart>
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
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
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

const Dashboard = ({ metricCardData }) => (
    <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />
            <UpgradeBar />
            <main className="flex-1 p-6 overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <OverviewOptions />
                    <DateRangePicker />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* eslint-disable-next-line react/prop-types */}
                    {metricCardData.map((card, index) => (
                        <MetricCard key={index} {...card} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BarChartComponent />
                    <PieChartComponent />
                </div>
            </main>
        </div>
    </div>
);

export default Dashboard;