import SimpleInputField from "@/Components/InputFields/SimpleInputField";

import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";
import Btn from "@/Elements/Buttons/Btn";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";

const ServicesTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["services"]["banners"].length > 1) {
      let filterValue = values["content"]["services"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][services][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`serviceBannerImage${i}`, { original_url: elem?.image_url });
      });
    }
  };
  return (
    <>
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][services][banners]", [...values["content"]?.["services"]["banners"], { title: "", description: "" }])} title="add_banners" />}
      {values["content"]?.["services"]?.["banners"]?.map((elem, index) => {
        return (
          <Row className="align-items-center" key={index}>
            <Col xs="11">
              <div className="shipping-accordion-custom">
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("services") + " " + (index + 1)}
                  <RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <SimpleInputField
                      nameList={[
                        { name: `[content][services][banners][${index}][title]`, placeholder: t("enter_title"), title: "title" },
                        { name: `[content][services][banners][${index}][description]`, placeholder: t("enter_description"), title: "description", type: "textarea" },
                      ]}
                    />
                    <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`serviceBannerImage${index}`} title="image" id={`serviceBannerImage${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`serviceBannerImage${index}`]} helpertext={getHelperText("375x586px")} />
                    <CheckBoxField name={`[content][services][banners][${index}][status]`} title="status" />
                  </div>
                )}
              </div>
            </Col>
            <Col xs="1">
              <a className="h-100 w-100 cursor-pointer close-icon" onClick={() => removeBanners(index)}>
                <RiCloseLine />
              </a>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default ServicesTab;
