import filterEmoji from "./filterEmoji";
import emojiList from "..emojiList.json";

test("filterEmoji function filters the emoji list correctly", () => {
  const searchText = "smile";
  const maxResults = 5;

  const filteredEmojiList = filterEmoji(searchText, maxResults);

  const expectedFilteredEmojiList = emojiList
    .filter(
      (emoji) =>
        emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
        emoji.keywords.includes(searchText)
    )
    .slice(0, maxResults);

  expect(filteredEmojiList.length).toBe(expectedFilteredEmojiList.length);

  expectedFilteredEmojiList.forEach((expectedEmoji, index) => {
    expect(filteredEmojiList[index]).toEqual(expectedEmoji);
  });
});
