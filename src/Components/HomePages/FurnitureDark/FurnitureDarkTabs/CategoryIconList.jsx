import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";

const CategoryIconsList = ({ values, setFieldValue, categoryData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryIconList"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_icon_list][status]`} title="status" />
    </>
  );
};
export default CategoryIconsList;
