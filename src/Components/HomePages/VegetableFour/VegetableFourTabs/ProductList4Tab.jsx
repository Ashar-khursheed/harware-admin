import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList4Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list_4][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][products_list_4][sub_title]`, placeholder: t("enter_sub_title"), title: "sub_title" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList4Product",
            title: "products",
            inputprops: {
              name: "productList4Product",
              id: "productList4Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_4][status]`} title="status" />
    </>
  );
};
export default ProductList4Tab;
