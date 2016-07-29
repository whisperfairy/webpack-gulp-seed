/**
 * Created by whisp_000 on 2016/5/22.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import { DatePicker } from 'antd';
ReactDOM.render(
    <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
    , document.querySelector('#container'));