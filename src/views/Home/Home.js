import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import './Home.scss';
import echarts from 'echarts';
export default (params) => {
  useEffect(() => {
    const getColumn = document.getElementById('column-chart');
    const myEcharts = echarts.init(getColumn);
  });

  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col span={24}>
          <Card hoverable bordered>
            <h1 className="welcome">欢迎来到客户关系管理系统</h1>
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
