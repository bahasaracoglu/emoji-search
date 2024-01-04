import { render, screen } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

test("EmojiResults renders the emoji list correctly on initial load", () => {
  const emojiData = [
    { title: "Smile", symbol: "😊" },
    { title: "Heart", symbol: "❤️" },
  ];

  render(<EmojiResults emojiData={emojiData} />);

  const emojiResultsComponent = screen.getByTestId("emoji-results");
  expect(emojiResultsComponent).toBeInTheDocument();

  emojiData.forEach((emoji) => {
    const emojiElement = screen.getByText(emoji.symbol);
    expect(emojiElement).toBeInTheDocument();
  });
});
