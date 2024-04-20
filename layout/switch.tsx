import { useChangeLocale } from "@/locales/client";
import { Button, Stack } from "@mui/material";

export function Switch() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  return (
    <Stack direction={"row"} gap={2}>
      <Button sx={{ color: "white" }} onClick={() => changeLocale("en")}>
        EN
      </Button>
      <Button sx={{ color: "white" }} onClick={() => changeLocale("zh")}>
        ZH
      </Button>
    </Stack>
  );
}
