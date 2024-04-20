"use client";

import { useChangeLocale } from "@/locales/client";
import { Button, Stack } from "@mui/material";

export function Switch() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  return (
    <Stack direction={"row"} gap={2}>
      <Button variant="contained" onClick={() => changeLocale("en")}>
        EN
      </Button>
      <Button variant="contained" onClick={() => changeLocale("zh")}>
        ZH
      </Button>
    </Stack>
  );
}
