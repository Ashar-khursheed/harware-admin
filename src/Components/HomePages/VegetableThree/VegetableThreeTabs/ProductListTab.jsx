import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductListTab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][products_list][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productListProduct",
            title: "products",
            inputprops: {
              name: "productListProduct",
              id: "productListProduct",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list][status]`} title="status" />
    </>
  );
};
export default ProductListTab;
