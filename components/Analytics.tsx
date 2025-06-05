import { UMAMI_URL, UMAMI_WEB_ID } from "@/lib/constants";

export const Analytics = () => {
  return (
    <>
      <script
        defer
        src={`${UMAMI_URL}/script.js`}
        data-website-id={UMAMI_WEB_ID}
      ></script>
    </>
  );
};
