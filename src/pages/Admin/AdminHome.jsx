import {
  FaBox,
  FaClipboardList,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";
import PropTypes from "prop-types";
import useAuth from "./../../hooks/GetAuthInfo/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/AxiosSecure/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stats");
      return data;
    },
  });
  console.log(stats);

  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure("/orders-stats");
      return data;
    },
  });
  console.log(orderStats);
  if (!orderStats.length) return <div>Loading Pie Chart...</div>;


  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };




  
const pieChartData = orderStats.map(data=> {
  return {name: data.category, value: data.revenue}
})

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#fc1211'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};






  return (
    <div>
      <div className="text-3xl font-bold text-gray-900 mb-4">
        Hi, {user?.displayName}
      </div>

      <div className="">
        <div className="p-6">
          {/* Grid for the top four admin cards, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Revenue Card */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaWallet />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">
                ${typeof stats?.revenue === "number" ? stats.revenue.toFixed(2) : "N/A"}
                </div>
                <div>Revenue</div>
              </div>
            </div>

            {/* Customers Card */}
            <div className="bg-gradient-to-r from-blue-500 to-sky-400 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaUserFriends />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">{stats?.customers}</div>
                <div>Customers</div>
              </div>
            </div>

            {/* Products Card */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-400 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaBox />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">{stats?.menuItems}</div>
                <div>Products</div>
              </div>
            </div>

            {/* Orders Card */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white p-4 rounded-lg flex items-center justify-center">
              <div className="text-4xl">
                <FaClipboardList />
              </div>
              <div className="text-right ml-4">
                <div className="text-2xl font-bold">{stats?.orders}</div>
                <div>Orders</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={orderStats}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {orderStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={1000} height={1000}>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend></Legend>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminHome.propTypes = {
  fill: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
};
export default AdminHome;
