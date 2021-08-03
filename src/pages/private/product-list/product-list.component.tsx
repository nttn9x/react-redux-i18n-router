import React from "react";
import styles from "./product-list.module.scss";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "components/libraries";
import { Inbox as InboxIcon } from "components/icons";

import useProductListHook from "./product-list.hook";

const ProductList = () => {
  const { data } = useProductListHook();
  return (
    <List component="nav" aria-label="main mailbox folders">
      {data.map((d: any, i: number) => (
        <div className={styles.text}>
          <ListItem key={i} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={d} />
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default ProductList;
