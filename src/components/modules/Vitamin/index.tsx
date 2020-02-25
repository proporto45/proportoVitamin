import React, {useState} from 'react';
import styled from 'styled-components';

import Anchor from 'common/Anchor';
import {DatePicker} from "antd";
import { Typography } from 'antd';

const { Title } = Typography;

const VitaminHeader = styled.header`
  text-align: center;
  padding: 50px 10px;
  margin: 0 0 50px;
  background: ${(props) => props.theme.colors.black};

  & > svg {
    width: 250px;
  }
`;

const VitaminContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
`;

const VitaminHOne = styled.h2`
color: #fff;
`;
const Vitamin: React.FC = () => {

  const [headerText, setHeaderText] = useState<string>('ProportoVitamin');
setTimeout(()=>{
  setHeaderText('Витаминка проект');
},2000);
  return (
  <>
    <Title>
      {headerText}
    </Title>
    <VitaminContent>
      <DatePicker />
    </VitaminContent>
  </>
)};

export default Vitamin;
