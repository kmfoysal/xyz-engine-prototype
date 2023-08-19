import Chart from "../components/Chart";
import StepForm from "../components/StepForm";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="section-wrapper">
          <h3
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Step Form
          </h3>
          <StepForm />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
