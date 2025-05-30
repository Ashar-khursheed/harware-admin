import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList2Tab = ({ productData, setSearch, setFieldValue, values }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list_2][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][products_list_2][description]`, placeholder: t("enter_description"), title: "description" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList2Product",
            title: "products",
            inputprops: {
              name: "productList2Product",
              id: "productList2Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list_2][status]`} title="status" />
    </>
  );
};
export default ProductList2Tab;
