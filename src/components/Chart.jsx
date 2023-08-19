import { Area } from "@ant-design/charts";
import useGlobal from "../hooks/useGlobal";
import { useEffect, useState } from "react";

const Chart = () => {
  const { chartData } = useGlobal();

  const [data, setData] = useState([]);

  const fetchDataAsync = async () => {
    setTimeout(() => {
      setData(chartData);
    }, 300);
  };

  useEffect(() => {
    fetchDataAsync();
  });


  const config = {
    data,
    xField: "kp",
    yField: "xAxisValue",
    xAxis: {
      range: [0, 1],
      tickCount: 10,
    },
    yAxis: {
      range: [0, 1],
      tickCount: 10,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return (
    <>
      {data?.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            KP Chart
          </h3>
          <Area {...config} />
        </div>
      )}
    </>
  );
};

export default Chart;
