import React, { useState } from "react";

import { HorizontalBar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

const Chart = ({ labels, value1,value2 }) => {
  const [data] = useState({
    labels: labels,
    datasets: [
      {
        label: "2024",
        backgroundColor: "#7620ff",
        borderColor: "rgb(194, 116, 161)",
        data: value1,
      },
      {
        label: "2022",
        backgroundColor: "#f2b300",
        borderColor: "rgb(71, 225, 167)",
        data: value2,
      },
    ],
  });

  return (
    <CDBContainer style={{ padding: "0px 0px 30px" }}>
      <h3 className="mb-5 text-center font40 extraBold">
        My Professional Skills
      </h3>
      <HorizontalBar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart;
