import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import './Home.scss';
import echarts from 'echarts';


export default (params) => {
  const [renderCoumn, setrenderCoumn] = useState([]);
  useEffect(() => {
    const getColumn = document.getElementById('column-chart');
    const myEcharts = echarts.init(getColumn);

    // 使用刚指定的配置项和数据显示图表。
    myEcharts.setOption(option);
  });
  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col span={24}>
          <Card hoverable bordered>
            <h1 classNames="welcome">欢迎来到客户关系管理系统</h1>
          </Card>
        </Col>
      </Row>
      <Card>
        <Row gutter={24} className="chart-main">
          <Col span={12} id="column-chart"></Col>
          <Col span={24} id="line-chart"></Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
