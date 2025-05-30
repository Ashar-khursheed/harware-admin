import TabTitle from "@/Components/Widgets/TabTitle";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { MarketplaceOneOfferBannerTitle } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";

const OfferBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={MarketplaceOneOfferBannerTitle} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image1" title="image" id="offerBanner1Image1" showImage={values["offerBanner1Image1"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType1", multipleNameKey: "offerBanner1Link1" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="status" />
        </TabPane>
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image2" title="image" id="offerBanner1Image2" showImage={values["offerBanner1Image2"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType2", multipleNameKey: "offerBanner1Link2" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="status" />
        </TabPane>
        <TabPane tabId="3">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image3" title="image" id="offerBanner1Image3" showImage={values["offerBanner1Image3"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType3", multipleNameKey: "offerBanner1Link3" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="status" />
        </TabPane>
        <TabPane tabId="4">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="offerBanner1Image4" title="image" id="offerBanner1Image4" showImage={values["offerBanner1Image4"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "offerBanner1LinkType4", multipleNameKey: "offerBanner1Link4" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][offer_banner_1][banner_1][status]`} title="status" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default OfferBannerTab;
