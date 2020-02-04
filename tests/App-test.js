import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import TempConverter from "./TempConverter";
configure({ adapter: new Adapter() });
import App from "./App.js";

const wrapper = shallow(<App />);

test('O tamanho da lista deve ser igua a 10.', () => {
  expect(wrapper.instance().personagens().length).toEqual(10);
});