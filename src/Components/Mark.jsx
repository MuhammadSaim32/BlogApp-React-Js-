import MarkdownIt from "markdown-it";
import { useEffect } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

export default function Editor({ intialValue, content, setContent }) {
  function handleEditorChange({ text }) {
    setContent(text);
  }

  useEffect(() => {
    setContent(intialValue);
  });

  return (
    <MdEditor
      className="mt-36"
      value={content}
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
}
