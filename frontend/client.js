import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_REACT_SANITY_APP_ID;
const projectToken = import.meta.env.VITE_REACT_SANITY_TOKEN;

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: projectToken,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
