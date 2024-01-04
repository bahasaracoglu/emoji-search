// Header.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; /

import Header from "./Header";

test("Header component renders correctly", () => {
  render(<Header />);


  const headerElement = screen.getByTestId("header");

  const emojiImages = screen.getAllByAltText(/emoji/i);
  const emojiSearchText = screen.getByText("Emoji Search");

  expect(headerElement).toBeInTheDocument();
  expect(emojiImages.length).toBe(2);
  expect(emojiSearchText).toBeInTheDocument();
});
