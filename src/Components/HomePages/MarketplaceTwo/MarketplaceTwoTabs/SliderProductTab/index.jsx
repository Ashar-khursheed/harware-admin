import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SliderProduct1 from "./SliderProduct1";
import SliderProduct2 from "./SliderProduct2";

const SliderProductTab = ({ values, setFieldValue, description, productData, setSearch }) => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation("common");
  
  return (
    <>
      <h4 className="fw-semibold mb-3 txt-primary w-100">{t("product_slider")} </h4>
      <CheckBoxField name={`[content][slider_products][status]`} title="status" />
      <SliderProduct1 active={active} setActive={setActive} values={values} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} />
      <SliderProduct2 active={active} setActive={setActive} values={values} description={description} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} />
    </>
  );
};
export default SliderProductTab;
