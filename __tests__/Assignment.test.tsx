import React from "react";
import { render, screen } from "@testing-library/react";
import Assignments from "@/components/feature/Asssignments"; 

test("renders assignments correctly", () => {
  render(<Assignments />);

  expect(screen.getByText("Logo design for a Airline")).toBeDefined();
  // Add more assertions as needed
});
