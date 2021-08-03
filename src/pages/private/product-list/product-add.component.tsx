import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Button, Grid, TextField } from "components/libraries";
import { addProduct } from "store/modules/product-list/product-list.action";

const ProductAdd = () => {
  const { t } = useTranslation(["common", "product"]);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const saveData = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addProduct(value, () => {
        setValue("");
      })
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label={t("product:name")}
          value={value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={saveData} variant="contained" color="primary">
          {t("save")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductAdd;
