import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

export default function Editor({ content, setContent }) {
  function handleEditorChange({ text }) {
    setContent(text);
  }

  return (
    <MdEditor
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
}
