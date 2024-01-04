import { render, fireEvent, screen } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";

test("EmojiResultRow copies the emoji text when clicked", () => {
  const emojiData = {
    title: "Smile",
    symbol: "😊",
  };

  render(<EmojiResultRow title={emojiData.title} symbol={emojiData.symbol} />);

  x;
  const emojiResultRow = screen.getByTestId("emoji-result-row");

  jest.spyOn(global, "ClipboardJS").mockImplementation(() => {
    return {
      on: jest.fn((event, callback) => {
        if (event === "success") {
          callback({ text: emojiData.symbol });
        }
      }),
    };
  });

  fireEvent.click(emojiResultRow);

  expect(global.ClipboardJS.on).toHaveBeenCalledWith(
    "success",
    expect.any(Function)
  );
  expect(global.ClipboardJS.on.mock.calls[0][1].text).toBe(emojiData.symbol);
});
