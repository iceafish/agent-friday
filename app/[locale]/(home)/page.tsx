// import { setStaticParamsLocale } from 'next-international/server';
import { getI18n, getScopedI18n, getCurrentLocale } from "@/locales/server";
import Client from "./client";
import { Provider } from "../provider";
import { Typography } from "@mui/material";

// Uncomment to test Static Generation on this page only
// export function generateStaticParams() {
//   return getStaticParams();
// }

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Uncomment to test Static Generation
  // setStaticParamsLocale(locale);

  const t = await getI18n();
  // const t2 = await getScopedI18n('scope.more');
  const currentLocale = getCurrentLocale();

  return (
    <div>
      <Provider locale={locale}>
        <Client />
      </Provider>
      <Typography variant={"h1"}>SSR / SSG</Typography>
      <Typography component={"p"}>
        Current locale:
        <Typography component={"span"}>{currentLocale}</Typography>
      </Typography>
      <Typography>
        Hello: {t("home.welcome", { name: "agent=>friday" })}
      </Typography>
    </div>
  );
}
