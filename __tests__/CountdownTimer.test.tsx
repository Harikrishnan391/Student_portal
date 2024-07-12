import React from "react";
import { render, screen, act } from "@testing-library/react";
import CountdownTimer from "@/components/feature/CountdownTimer";
import { CountdownTimerProps } from "@/types";

jest.useFakeTimers();

const targetDate = new Date(Date.now() + 5000).toISOString();
const onComplete = jest.fn();

const renderComponent = (props: Partial<CountdownTimerProps> = {}) =>
  render(
    <CountdownTimer
      targetDate={props.targetDate || targetDate}
      onComplete={props.onComplete || onComplete}
    />
  );

describe("CountdownTimer", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByText(/00:00:05/)).toBeInTheDocument();
  });

  it("updates the countdown timer", () => {
    renderComponent();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText(/00:00:02/)).toBeInTheDocument();
  });

  it("calls onComplete when the countdown ends", () => {
    renderComponent();
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
