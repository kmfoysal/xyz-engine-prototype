import { Button, Steps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import useGlobal from "../hooks/useGlobal";

const StepForm = () => {

  const { formData } = useGlobal();

  const navigate = useNavigate()

  const canNext =
    formData.projectName !== "" &&
    formData.projectDescription !== "" &&
    formData.client !== "" &&
    formData.contractor !== "";
  
  
  const canSubmit =
    formData.max_X !== "" &&
    formData.min_X !== "" &&
    formData.min_Y !== "" &&
    formData.max_Y !== "" &&
    formData.min_Z !== "" &&
    formData.max_Z !== "";
  
  

  const steps = [
    {
      title: "Basic Info",
      content: <StepOne />,
    },
    {
      title: "File Info",
      content: <StepTwo />,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result')
  }

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

 

  return (
    <div className="step-form-wrapper">
      <Steps current={current} items={items} />
      <form className="step-form">{steps[current].content}</form>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {current < steps.length - 1 && (
          <Button
            size="large"
            type="primary"
            onClick={() => next()}
            disabled={!canNext}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            size="large"
            type="primary"
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            Show Result
          </Button>
        )}
        {current > 0 && (
          <Button
            size="large"
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
