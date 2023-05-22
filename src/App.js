import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import EditorToolbar from "./components/EditorToolbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Box } from "@chakra-ui/react";

function App() {
  const [toolbarOpen, setToolbarOpen] = useState(true);

  return (
    <div>
      <Header />
      <Box display={"grid"} gridTemplateColumns={"95% 5%"}>
        <Box>
          <EditorToolbar className="mt-10" />
          <Editor />
        </Box>
        <Box>
          <Sidebar />
        </Box>
      </Box>
    </div>
  );
}

export default App;
