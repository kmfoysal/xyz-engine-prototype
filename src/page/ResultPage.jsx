import { Button, Table } from "antd";
import useGlobal from "../hooks/useGlobal";

const ResultPage = () => {
  const { formData } = useGlobal();

  const columns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Project Description",
      dataIndex: "projectDescription",
      key: "projectDescription",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Contractor",
      dataIndex: "contractor",
      key: "contractor",
    },
    {
      title: "Min X",
      dataIndex: "min_X",
      key: "min_X",
    },
    {
      title: "Max X",
      dataIndex: "max_X",
      key: "max_X",
    },
    {
      title: "Min Y",
      dataIndex: "min_Y",
      key: "min_Y",
    },
    {
      title: "Max Y",
      dataIndex: "max_Y",
      key: "max_Y",
    },
    {
      title: "Min Z",
      dataIndex: "min_Z",
      key: "min_Z",
    },
    {
      title: "Max Z",
      dataIndex: "max_Z",
      key: "max_Z",
    },
  ];

  const data = [
    {
      projectName: formData.projectName,
      projectDescription: formData.projectDescription,
      client: formData.client,
      contractor: formData.contractor,
      min_X: formData.min_X,
      max_X: formData.max_X,
      min_Y: formData.min_Y,
      max_Y: formData.max_Y,
      min_Z: formData.min_Z,
      max_Z: formData.max_Z,
    },
  ];

  return (
    <div className="container">
      <div>
        <h2>Result Page</h2>

        <Table columns={columns} dataSource={data} pagination={false}
      bordered />

        <Button type="primary" onClick={() => window.print()}>
          Print
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
