import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const ThePie = ({ donationsInLocalStorage, donationsNotInLocalStorage }) => {
  const data = [
    { name: "You Donated", value: donationsInLocalStorage },
    {
      name: "Available for Donation",
      value: donationsNotInLocalStorage,
    },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip></Tooltip>
      <Legend></Legend>
    </PieChart>
  </ResponsiveContainer>
  );
};

ThePie.propTypes = {
  donationsInLocalStorage: PropTypes.number,
  donationsNotInLocalStorage: PropTypes.number,
};

export default ThePie;
