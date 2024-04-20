"use client";

import {
  CircularProgress,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import { FC, useCallback, useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { trim, tryit } from "radash";
import MenuIcon from "@mui/icons-material/Menu";

const ChatPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onQuery = useCallback(async () => {
    const queryStr = trim(value);

    if (!queryStr) {
      return;
    }

    setLoading(true);

    const [err, resp] = await tryit(fetch)("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ message: queryStr }),
    });

    if (!!err || !resp) {
      setLoading(false);
      console.error(err);
      return;
    }

    const data = await resp.text();

    console.log(
      "%capp/[locale]/chat/page.tsx:32 resp.text()",
      "color: white; background-color: #26bfa5;",
      data,
    );

    setLoading(false);
  }, [value]);

  return (
    <Stack height={1} justifyContent={"center"} alignItems={"center"}>
      <Paper
        // component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 1,
          maxWidth: "1100px",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <InputBase
          autoFocus
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ask your question"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.key === "Enter" && !loading) {
              e.stopPropagation();
              onQuery();
            }
          }}
        />

        <IconButton
          type="button"
          sx={{ p: "10px" }}
          // size="small"
          onClick={onQuery}
          // onMouseDown={handleMouseDownPassword}
        >
          {loading ? (
            <CircularProgress color="inherit" size={"24px"} />
          ) : (
            <SendRoundedIcon />
          )}
        </IconButton>

        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
    </Stack>
  );
};

export default ChatPage;
