import React from "react";
import { mount, shallow } from "enzyme";
import { App, Header, MonthCalendar, DayBoxGroup, DayBox } from "../components";
import { Heading, Container, Text, theme } from "../design system";
import { TYPE_OF_EVENTS } from "../logic/constant";
import "jest-styled-components";

describe("<App />", () => {
  it("shallow renders App without crashing", () => {
    shallow(<App />);
  });

  it("deep renders App without crashing", () => {
    const wrapper = mount(<App />);
    wrapper.unmount();
  });

  it("initiate the correct year according to javascript Date()", () => {
    const wrapper = shallow(<App />);
    const { year } = wrapper.state();
    expect(year).toEqual(new Date().getFullYear());
    expect(year).not.toEqual(new Date().getFullYear() + 1);
  });

  it("render the correct year according to javascript Date()", () => {
    const wrapper = mount(<App />);
    const { year } = wrapper.state();
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(2);
    expect(
      wrapper
        .find(Header)
        .find(Heading.h1)
        .at(0)
        .text()
    ).toEqual("" + year);
  });

  it("change year render upon clicking Next button", () => {
    const wrapper = mount(<App />);
    const { year } = wrapper.state();
    const firstHeader = wrapper.find(Header).at(0);
    const firstNextButton = firstHeader
      .find("button")
      .findWhere(node => node.text() === "Next");
    const firstPrevButton = firstHeader
      .find("button")
      .findWhere(node => node.text() === "Prev");
    firstNextButton.simulate("click");
    expect(wrapper.state("year")).toEqual(year + 1);
    firstPrevButton.simulate("click");
    expect(wrapper.state("year")).toEqual(year);
  });

  it("initialize the correct today according to javascript Date()", () => {
    const wrapper = shallow(<App />);
    const { eventStorage } = wrapper.state();
    const todayDate = new Date(Object.keys(eventStorage)[0]);
    const benchmarkDate = new Date();
    const supposedEvent = TYPE_OF_EVENTS.TODAY_DATE;
    expect(todayDate.getFullYear()).toEqual(benchmarkDate.getFullYear());
    expect(todayDate.getMonth()).toEqual(benchmarkDate.getMonth());
    expect(todayDate.getDate()).toEqual(benchmarkDate.getDate());
    expect(eventStorage[Object.keys(eventStorage)[0]]).toEqual([supposedEvent]);
  });

  it("render the today box with bold and underline, and only once", () => {
    const wrapper = mount(<App />);
    const { eventStorage } = wrapper.state();
    const todayDateString = Object.keys(eventStorage)[0];
    const todayDateObject = new Date(todayDateString);
    const thisMonthCalendar = wrapper
      .find(MonthCalendar)
      .at(parseInt(todayDateObject.getMonth()));
    const todayDayBoxGroup = thisMonthCalendar
      .find(DayBoxGroup)
      .findWhere(
        node => node.key() === todayDateString && node.name() === "DayBoxGroup"
      );
    expect(todayDayBoxGroup).toHaveLength(1);
    const todayDayBox = todayDayBoxGroup.find(DayBox).find(Text);
    expect(todayDayBox).toHaveStyleRule("font-weight", "" + theme.bold);
    expect(todayDayBox).toHaveStyleRule("text-decoration", "underline");
  });
});
