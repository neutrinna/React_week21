import { Chart } from "react-google-charts";

function App() {

  return (
    <div className="App"> 
    <Chart
      chartType="PieChart"
      data={[
        ["Task", "Hours per Day"],
        ["sleep", 8],
        ["work", 8],
        ["be on the way home/to the office", 2],
        ["realy code", 5],
        ["eat", 1],
      ]}
      options={{
        title: "My Daily Activities",
      }}
      width={"90vw"}
      height={"30vw"}
    />
    </div>
  );
}

export default App;
