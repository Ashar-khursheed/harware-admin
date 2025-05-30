import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import Btn from "@/Elements/Buttons/Btn";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const SocialMediaTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["social_media"]["banners"].length > 1) {
      let filterValue = values["content"]["social_media"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][home_banner][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`socialMediaBannerImage${i}`, { original_url: elem?.image_url });
        elem?.redirect_link?.link_type && setFieldValue(`homeRedirectLinkType${i}`, elem?.redirect_link?.link_type);
        elem?.redirect_link?.link && setFieldValue(`homeRedirectLink${i}`, elem?.redirect_link?.link);
      });
    }
  };

  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][social_media][title]`, placeholder: t("enter_title"), title: "title" }]} />
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][social_media][banners]", [...values["content"]?.["social_media"]["banners"], { title: "", description: "" }])} title="add_banners" />}
      {values["content"]?.["social_media"]?.["banners"]?.map((elem, index) => {
        return (
          <Row className="align-items-center" key={index}>
            <Col xs="11">
              <div className="shipping-accordion-custom">
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("social_media") + " " + (index + 1)}
                  <RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`socialMediaBannerImage${index}`} title="image" id={`socialMediaBannerImage${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`socialMediaBannerImage${index}`]} helpertext={getHelperText("375x586px")} />
                    <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `socialMediaLinkType${index}`, multipleNameKey: `socialMediaLink${index}` }} setSearch={setSearch} />
                    <CheckBoxField name={`[content][social_media][banners][${index}][status]`} title="status" />
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

export default SocialMediaTab;
