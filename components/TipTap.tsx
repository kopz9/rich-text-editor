"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./ToolBar";
import Heading from '@tiptap/extension-heading';

export default function TipTap({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit.configure({

    }), Heading.configure({
      HTMLAttributes: {
        class: "text-3xl font-bold",
        levels: [2]
      }
    })],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-background-transparent mt-2 pl-2 pt-2",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  return (
    <>
      <div className="flex flex-col justify-stretch min-h-[250px]">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
}
