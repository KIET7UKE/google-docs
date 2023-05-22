import { createRef, useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

import { IconButton, Tooltip } from "@mui/material";

function Header() {
  const [title, setTitle] = useState("Untitled Document");

  return (
    <div className="bg-[#f9fdff] border-b border-zinc-400 fixed">
      <div className="flex flex-col pb-16">
        <div className="mt-3 h-[60px] ml-2 flex flex-row">
          {/* Left Toolbar Part */}
          <div>
            <Tooltip title="Docs Home">
              <img src={logo} alt="" className="w-[42px] mb-10 ml-2" />
            </Tooltip>
          </div>
          <div className="ml-2">
            <div className="font-bold flex flex-row">
              <Tooltip title="Rename">
                <h1>
                  <input
                    type="text"
                    value={title}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </h1>
              </Tooltip>
              <Tooltip title="Star">
                <StarOutlineOutlinedIcon className="ml-6 scale-75" />
              </Tooltip>
              <Tooltip title="Move">
                <DriveFileMoveOutlinedIcon className="ml-1 scale-75" />
              </Tooltip>
              <Tooltip title="See document status">
                <CloudDoneOutlinedIcon className="ml-2 scale-75" />
              </Tooltip>
            </div>

            <div className="flex flex-row gap-4">
              <h1>File</h1>
              <h1>Edit</h1>
              <h1>View</h1>
              <h1>Insert</h1>
              <h1>Format</h1>
              <h1>Tools</h1>
              <h1>Extensions</h1>
              <h1>Help</h1>
            </div>
          </div>

          {/* Right Toolbar Part */}
          <div className="ml-[520px]">
            <div className="flex flex-row gap-3">
              <Tooltip title="Last Edit was recently">
                <IconButton>
                  <RestoreOutlinedIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Open Comment History">
                <IconButton>
                  <CommentOutlinedIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title='Join a call here'>
                <IconButton style={{ borderRadius: 100 }}>
                  <div className="flex gap-1">
                    <VideocamOutlinedIcon className="scale-125" />
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </IconButton>
              </Tooltip>

              <Tooltip title="Share">
                <button className="flex flex-row bg-[#c2e7ff] rounded-3xl w-[110px] px-4 py-2">
                  <CorporateFareOutlinedIcon />
                  <h1 className="ml-2 text-base">Share</h1>
                </button>
              </Tooltip>

              <Tooltip title="Google Account">
                <button className="rounded-full w-[35px] h-[35px] mt-[0.5px] bg-neutral-600">
                  <h1 className="font-bold text-white">S</h1>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Editor Toolbar Part */}
      </div>
    </div>
  );
}

export default Header;
