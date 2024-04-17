import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.eventhias.com/ruta-de-la-tapa-tacoronte",
  integrations: [tailwind(), icon()],
});
