import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { useEffect } from "react";

export default function Products() {
  const defaultFetch = async () => {
    const { admin } = await authenticate.admin();
    const reponse = await admin.graphql(
      `query prd {
        products (first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
      `,
    );
    return reponse;
  };

  useEffect(() => {
    console.log(defaultFetch(), "defaultFetch");
  }, []);

  return (
    <Page>
      <ui-title-bar title="Product page" />
      <iframe
        src="https://admin.shopify.com/store/quickstart-b8732482/products?selectedView=all"
        title="test"
        width="540"
        height="450"
      ></iframe>
    </Page>
  );
}
