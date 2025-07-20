import { useState } from "react";

import BarChartComponent from "./BarChartComponent";
import AreaChartComponent from "./AreaChartComponent";
import Wrapper from "../../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [showBarChart, setShowBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setShowBarChart(!showBarChart)}>
        {showBarChart ? "Area Chart" : "Bar Chart"}
      </button>
      {showBarChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
