import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import Conf from "../Conf/Conf";

function Rte({ name, control, intialValue }) {
  return (
    <div className="w-auto">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Editor
            apiKey={Conf.TinyMCE_Api_Key}
            initialValue={intialValue}
            value={field.value}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ; direction: ltr; text-align: left; }",
            }}
            onEditorChange={(newValue) => field.onChange(newValue)}
          />
        )}
      />
    </div>
  );
}

export default Rte;
