import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";
import Btn from "@/Elements/Buttons/Btn";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const OfferBanner2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["offer_banner_2"]["banners"].length > 1) {
      let filterValue = values["content"]["offer_banner_2"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][banner][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`offerBanner2Image${i}`, { original_url: elem?.image_url });
        elem?.redirect_link?.link_type && setFieldValue(`offerBanner2RedirectLinkType${i}`, elem?.redirect_link?.link_type);
        elem?.redirect_link?.link && setFieldValue(`offerBanner2RedirectLink${i}`, elem?.redirect_link?.link);
      });
    }
  };
  return (
    <>
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][offer_banner_2][banners]", [...values["content"]?.["offer_banner_2"]["banners"], { title: "", description: "" }])} title="add_banners" />}
      {values["content"]?.["offer_banner_2"]?.["banners"]?.map((elem, index) => {
        return (
          <Row className="align-items-center" key={index}>
            <Col xs="11">
              <div className="shipping-accordion-custom">
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("banner") + " " + (index + 1)}
                  <RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`offerBanner2Image${index}`} title="image" id={`offerBanner2Image${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`offerBanner2Image${index}`]} helpertext={getHelperText("376x231px")} />
                    <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `offerBanner2RedirectLinkType${index}`, multipleNameKey: `offerBanner2RedirectLink${index}` }} setSearch={setSearch} />
                    <CheckBoxField name={`[content][offer_banner_2][banners][${index}][status]`} title="status" />
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

export default OfferBanner2Tab;
