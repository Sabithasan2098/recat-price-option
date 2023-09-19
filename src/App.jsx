import "./App.css";
import LineCharts from "./Component/LineChart/LineCharts";
import Navbar from "./Component/Navbar/Navbar";
import PriceOptions from "./Component/PriceOptions/PriceOptions";
 

function App() {
  return (
    <>
    <Navbar></Navbar>
      <h1 className="bg-orange-500 p-6 m-10 text-center text-4xl text-white font-bold">Vite + React</h1>
     <PriceOptions></PriceOptions>
     <LineCharts></LineCharts>
    </>
  );
}

export default App;
