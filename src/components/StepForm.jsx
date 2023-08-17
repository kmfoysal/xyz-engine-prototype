import { Button, Steps, message, theme } from "antd";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const StepForm = () => {
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
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
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
