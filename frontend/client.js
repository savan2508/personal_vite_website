import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import dotenv from "dotenv";

dotenv.config();

const projectId = process.env.REACT_SANITY_APP_ID;
const projectToken = process.env.REACT_SANITY_TOKEN;

console.log(projectId);
console.log(projectToken);

export const client = createClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: projectToken,
});
