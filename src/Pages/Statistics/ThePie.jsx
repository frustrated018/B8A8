import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
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
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={0}
        outerRadius={170}
        fill="#8884d8"
        dataKey="value"
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" iconSize={17} layout="vertical" iconType="circle" />
    </PieChart>
  );
};

ThePie.propTypes = {
  donationsInLocalStorage: PropTypes.number,
  donationsNotInLocalStorage: PropTypes.number,
};

export default ThePie;
