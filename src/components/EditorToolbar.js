import React, { useState } from "react";

import UTurnLeftOutlinedIcon from "@mui/icons-material/UTurnLeftOutlined";
import UTurnRightOutlinedIcon from "@mui/icons-material/UTurnRightOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatClearOutlinedIcon from "@mui/icons-material/FormatClearOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import { Tooltip } from "@mui/material";

function EditorToolbar() {
  return (
    <div className="ml-5 fixed rounded-3xl h-[45px] w-[1320px] bg-[#edf2fa] px-2 py-2  mt-[70px]">
      <div className="flex flex-row">
        <div>
          <Tooltip title="Undo">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <UTurnLeftOutlinedIcon className="rotate-90 scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Redo">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <UTurnRightOutlinedIcon className="-rotate-90 scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Print">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <LocalPrintshopOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Spell Check">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <SpellcheckOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Paint">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <ImagesearchRollerOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Zoom">
            <button className="hover:bg-gray-300 rounded-md w-[80px] px-1">
              100%
              <ArrowDropDownOutlinedIcon className="ml-1 scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Styles">
            <button className="hover:bg-gray-300 rounded-md px-1 ml-1">
              <span className="font-bold text-sm">Normal text</span>
              <ArrowDropDownOutlinedIcon className="ml-2 scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Font">
            <button className="hover:bg-gray-300 rounded-md px-1 ml-1">
              <span className="font-bold text-sm">Arial</span>
              <ArrowDropDownOutlinedIcon className="ml-6 scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Decrease font size">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <RemoveOutlinedIcon className="scale-50" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Font Size">
            <input
              type="text"
              value={11}
              className="w-[35px] h-[25px] px-2 rounded-md border border-black bg-[#edf2fa]"
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Increase font size">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <AddOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Bold">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatBoldOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Italic">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatItalicOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Underline">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatUnderlinedOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Text color">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatColorTextOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Highlight color">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <BorderColorOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Insert Link">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <InsertLinkOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Add comment">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <AddCommentOutlinedIcon className="scale-75 opacity-30" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Insert photo">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <InsertPhotoOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Align & Indent">
            <button className="hover:bg-gray-300 rounded-md">
              <FormatAlignLeftOutlinedIcon className="scale-75" />
              <ArrowDropDownOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Line & Paragraph Spacing">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatLineSpacingOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Checklist">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <ChecklistOutlinedIcon className="scale-75" />
              <ArrowDropDownOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Bulletlist">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatListBulletedOutlinedIcon className="scale-75" />
              <ArrowDropDownOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Numbered list">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatListNumberedOutlinedIcon className="scale-75" />
              <ArrowDropDownOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Decrease Indent">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatIndentDecreaseOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Increase Indent">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatIndentIncreaseOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Clear Formatting">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <FormatClearOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Editing Mode">
            <button className="hover:bg-gray-300 rounded-md px-1 ml-12">
              <CreateOutlinedIcon className="scale-75" />
              <ArrowDropDownOutlinedIcon className="scale-75" />
            </button>
          </Tooltip>
        </div>
        <div className="border-l border-black"></div>
        <div>
          <Tooltip title="Hide the menus">
            <button className="hover:bg-gray-300 rounded-md px-1">
              <KeyboardArrowUpOutlinedIcon />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default EditorToolbar;
