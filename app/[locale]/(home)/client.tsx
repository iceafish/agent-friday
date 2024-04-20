"use client";

import { useI18n } from "@/locales/client";
import { Typography } from "@mui/material";

export default function Client() {
  const t = useI18n();

  return <Typography>From client: {t("client.type.csr")}</Typography>;
}
