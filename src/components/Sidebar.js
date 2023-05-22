import React,{ useState } from "react";

import { Box, Flex, Icon, Image, Link, VStack } from "@chakra-ui/react";
import { MdAdd, MdOutlineArrowForwardIos } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Sidebar() {

  const [open, setOpen] = useState(true);

  return (
    <div>
    <Flex flexDirection={"column"} className="fixed">
      <VStack spacing={"35"}>
        <Box mt={"150"} ml={20}>  
          <Link
            href="https://calendar.google.com/calendar"
            isExternal
          >
            <Image
              cursor={"pointer"}
              boxSize={"40"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://keep.google.com" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"40"}
              src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"40"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://contacts.google.com/" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"40"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
            />
          </Link>
        </Box>
        <Box>
          <Link href="" isExternal>
            <Image
              cursor={"pointer"}
              boxSize={"40"}
              src="https://cdn-icons-png.flaticon.com/512/355/355980.png"
            />
          </Link>
        </Box>

        <Box>
          <Icon cursor={"pointer"} boxSize={"40"} as={MdAdd} />
        </Box>

        <Box>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

      </VStack>
    </Flex>
    </div>
  );
}