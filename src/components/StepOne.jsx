import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import useGlobal from "../hooks/useGlobal";

const StepOne = () => {

  const { formData, handleChange } = useGlobal();


  return (
    <div>
      <Title level={3} className="mb-20">
        Basic Info
      </Title>

      <Input
        type="text"
        size="large"
        placeholder="Project name"
        className="mb-20"
        name="projectName"
        value={formData?.projectName}
        onChange={handleChange}
      />
      <TextArea
        className="mb-20"
        placeholder="Project description"
        rows={4}
        name="projectDescription"
        value={formData?.projectDescription}
        onChange={handleChange}
      />
      <Input
        className="mb-20"
        type="text"
        size="large"
        placeholder="Client"
        name="client"
        value={formData?.client}
        onChange={handleChange}
      />
      <Input
        type="text"
        size="large"
        placeholder="Contractor"
        name="contractor"
        value={formData?.contractor}
        onChange={handleChange}
      />
    </div>
  );
};

export default StepOne;
