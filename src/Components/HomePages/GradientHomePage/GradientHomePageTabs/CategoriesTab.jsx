import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";

const CategoriesTab = ({  categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_1][status]`} title="status" />
    </>
  );
};
export default CategoriesTab;
