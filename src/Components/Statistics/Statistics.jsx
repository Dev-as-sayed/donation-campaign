import { PieChart, Pie, Tooltip, Legend,  Cell } from 'recharts';
import { useLoaderData } from "react-router-dom";
import { storedDonationFnc } from "../../Utility/LocalStoreg";


const Statistics = () => {
    const COLORS = ['#FF444A', '#00C49F'];

    const totalCategory = useLoaderData();
    const totalCategoryLength = totalCategory.length;

    const depositCategory = storedDonationFnc();
    const depositCategoryLength = depositCategory.length;

    const total = totalCategoryLength - depositCategoryLength;

    const depositPercentage = ((depositCategoryLength / totalCategoryLength) * 100).toFixed(2);
    const depositPercentageNum = parseInt(depositPercentage);

    const unDepositPercentage = ((total / totalCategoryLength) * 100).toFixed(2);
    const unDepositPercentageNum = parseInt(unDepositPercentage);

    const data = [
        { name: 'Your Donation', value: depositPercentageNum },
        { name: 'Total Donation', value: unDepositPercentageNum },
    ];
      

    return (
        <div className=" flex justify-center min-h-screen">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={90}
                    fill="#8884d8"
                    label
                >
                    {
                    data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length ]} />))
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;
