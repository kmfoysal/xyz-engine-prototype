import { DownloadOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import useGlobal from "../hooks/useGlobal";
import { Link } from "react-router-dom";

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
      ellipsis: {
        showTitle: false,
      },
      render: (projectDescription) => (
        <Tooltip placement="topLeft" title={projectDescription}>
          {projectDescription}
        </Tooltip>
      ),
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
      key: 1,
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

  const pdfRef = useRef();

  const options = {
    orientation: "potriot",
    unit: "in",
    format: [12, 14],
  };

  return (
    <div className="result section-wrapper">
      <div className="container">
        <div>
          <div ref={pdfRef}>
            <h2 className="mb-20 text-center">Result Table</h2>

            <Table
              className="data-table"
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
            />
          </div>

          <div className="btn-wrapper">
            <Link to="/">
              <Button
                type="primary"
                size="large"
                style={{ textDecoration: "none" }}
              >
                Go To Home
              </Button>
            </Link>
            <Button type="primary" size="large" onClick={() => window.print()}>
              Print
            </Button>

            <ReactToPdf
              targetRef={pdfRef}
              filename="xyz_engine.pdf"
              options={options}
              x={0.5}
              y={0.5}
              scale={0.77}
            >
              {({ toPdf }) => (
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size="large"
                  onClick={toPdf}
                >
                  Download PDF
                </Button>
              )}
            </ReactToPdf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
