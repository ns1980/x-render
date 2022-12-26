import React from 'react';
import { Checkbox, Input, InputNumber, Rate, Switch, TreeSelect } from 'antd';
import checkboxes from './antd/checkboxes';
import color from './antd/color';
import date from './antd/date';
import dateRange from './antd/dateRange';
import Html from './html';
import ImageInput from './antd/imageInput';
import multiSelect from './antd/multiSelect';
import radio from './antd/radio';
import select from './antd/select';
import slider from './antd/slider';
import time from './antd/time';
import timeRange from './antd/timeRange';
import upload from './antd/upload';
import urlInput from './antd/urlInput';

// 容器
import BoxCard from './container/BoxCard';
import BoxCollapse from './container/BoxCollapse';
import BoxLineTitle from './container/BoxLineTitle';
import BoxSubItem from './container/BoxSubItem';
import BoxPanel from './container/BoxPanel';



const { TextArea } = Input;

const FrNumber = ({ style, ...rest }) => {
  return <InputNumber style={{ width: '100%', ...style }} {...rest} />;
};

const FrTextArea = props => {
  let finalProps = {
    autoSize: {
      minRows: 3,
    },
    ...props,
  };
  if (finalProps.rows) delete finalProps.autoSize;

  return <TextArea {...finalProps} />;
};

const FrTreeSelect = ({ style, ...rest }) => (
  <TreeSelect style={{ width: '100%', ...style }} {...rest} />
);

// const FrCascader = ({ style, ...rest }) => (
//   <Cascader style={{ width: '100%', ...style }} {...rest} />
// );

export const widgets = {
  input: Input,
  checkbox: Checkbox,
  checkboxes, // checkbox多选
  color,
  date,
  time,
  dateRange,
  timeRange,
  imageInput: ImageInput,
  url: urlInput,
  multiSelect, // 下拉多选
  number: FrNumber,
  radio,
  select,
  slider, // 带滚条的number
  switch: Switch,
  textarea: FrTextArea,
  upload,
  html: Html,
  rate: Rate,
  treeSelect: FrTreeSelect,
  // cascader: FrCascader,

  card: BoxCard,
  collapse: BoxCollapse,
  lineTitle: BoxLineTitle,
  subItem: BoxSubItem,
  panel: BoxPanel
};

export const defaultWidgetNameList = Object.keys(widgets);
