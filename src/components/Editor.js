import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function Editor() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fdff] border-r">
      <div className="w-[850px] h-[1500px] mt-[150px] border border-zinc-400 focus:outline-none bg-white mb-4">
      <ReactQuill theme="bubble" className="h-full px-20 py-20" placeholder="Type @ to insert"/>
      </div>
    </div>
  );
}

export default Editor;
