import { Col, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import Papa from "papaparse"; // CSV parsing library
import useGlobal from "../hooks/useGlobal";

const StepTwo = () => {
  const { formData, setFormData, handleChange } = useGlobal();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFormData({ ...formData, csvFile: file });

      Papa.parse(file, {
        complete: (result) => {
          const data = result.data.slice(1); // Skip header

          const xValues = [];
          const yValues = [];
          const zValues = [];

          data.forEach((row) => {
            const x = parseFloat(row[1]);
            const y = parseFloat(row[2]);
            const z = parseFloat(row[3]);

            if (!isNaN(x)) xValues.push(x);
            if (!isNaN(y)) yValues.push(y);
            if (!isNaN(z)) zValues.push(z);
          });

          setFormData({
            ...formData,
            max_X: Math.max(...xValues).toString(),
            min_X: Math.min(...xValues).toString(),
            max_Y: Math.max(...yValues).toString(),
            min_Y: Math.min(...yValues).toString(),
            max_Z: Math.max(...zValues).toString(),
            min_Z: Math.min(...zValues).toString(),
          });
        },
      });
    }
  };


  return (
    <div>
      <div>
        <Title level={3} className="mb-20">
          Basic Info
        </Title>

        <h5>Project Name: {formData.projectName}</h5>
        <p className="mb-20">{formData.projectDescription}</p>
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
          className="mb-20"
          name="csvFile"
          accept=".csv"
          onChange={handleFileUpload}
        />

        <div>
          <Row gutter={[20, 20]} className="mb-20">
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Min X Value"
                name="min_X"
                value={formData.min_X}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Max X Value"
                name="max_X"
                value={formData.max_X}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="mb-20">
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Min Y Value"
                name="min_Y"
                value={formData.min_Y}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Max Y Value"
                name="max_Y"
                value={formData.max_Y}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Min Z Value"
                name="min_Z"
                value={formData.min_Z}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Input
                type="number"
                size="large"
                placeholder="Max Z Value"
                name="max_Z"
                value={formData.max_Z}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
