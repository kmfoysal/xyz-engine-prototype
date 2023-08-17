import Title from "antd/es/typography/Title";
import useGlobal from "../hooks/useGlobal";
import { Input } from "antd";

const StepTwo = () => {
  const { formData, handleChange } = useGlobal();

  return (
    <div>
      <div>
        <Title level={3} className="mb-20">
          Basic Info
        </Title>

        <h5>Project Name: {formData.projectName}</h5>
        <p className="mb-20">
        {formData.projectDescription}
        </p>
        <h5 className="">Client: {formData.client}</h5>
        <h5 className="mb-20">Contractor: {formData.contractor}</h5>
      </div>
      <div>
      <Title level={3} className="mb-20">
          File Info
        </Title>
      <Input
        type="file"
        size="large"
        placeholder="Project name"
        className="mb-20"
        name="csvFile"
        accept='.csv'
        onChange={handleChange}
      />
      </div>
    </div>
  );
};

export default StepTwo;
