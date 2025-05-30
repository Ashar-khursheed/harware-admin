import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionFourSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  values["content"]["home_banner"]["banners"].forEach((elem, i) => {
 if (!values["content"]["home_banner"]["banners"][i]["redirect_link"]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }

    if (values[`homeBannerImage${i}`]) {
      values["content"]["home_banner"]["banners"][i]["image_url"] = values[`homeBannerImage${i}`].hasOwnProperty('asset_url') ? values[`homeBannerImage${i}`].asset_url : values[`homeBannerImage${i}`].original_url;
    } else {
      values["content"]["home_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`homeRedirectLinkType${i}`] || values[`homeRedirectLink${i}`]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`homeRedirectLinkType${i}`];
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = values[`homeRedirectLink${i}`];
      if (values[`homeRedirectLinkType${i}`] == "product") {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`homeRedirectLink${i}`];
      } else {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  // Images
  if (values["offerBanner2Image1"]) {
    values["content"]["offer_banner_2"]["image_url"] = values["offerBanner2Image1"].hasOwnProperty('asset_url') ? values["offerBanner2Image1"].asset_url : values["offerBanner2Image1"].original_url;
  } else values["content"]["offer_banner_2"]["image_url"] = "";

  if (values["offerBanner1Image"]) {
    values["content"]["offer_banner_1"]["banner_1"]["image_url"] = values["offerBanner1Image"].hasOwnProperty('asset_url') ? values["offerBanner1Image"].asset_url : values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner_1"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner_1"]["banner_2"]["image_url"] = values["offerBanner2Image"].hasOwnProperty('asset_url') ? values["offerBanner2Image"].asset_url : values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner_1"]["banner_2"]["image_url"] = "";

  if (values["offerBanner3Image"]) {
    values["content"]["offer_banner_1"]["banner_3"]["image_url"] = values["offerBanner3Image"].hasOwnProperty('asset_url') ? values["offerBanner3Image"].asset_url : values["offerBanner3Image"].original_url;
  } else values["content"]["offer_banner_1"]["banner_3"]["image_url"] = "";

  //Redirect Link
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType"] = "";
  }
  if (values["featureBanner1Link"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = values["featureBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["product_ids"] = values["featureBanner1Link"];
    } else {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ---------------------------------------------------------------------
  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================
  if (values["offerBanner3LinkType"]) {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link_type"] = values["offerBanner3LinkType"];
  } else {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    if (values["offerBanner3LinkType"] == "product") {
      values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    } else {
      values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
  }

  //MultiSelect

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["content"] && values["content"]["product_ids"]) {
    values["content"]["products_list"]["products"]["product_ids"] = values["productLists"];
  }
  if (values["content"] && values["content"]["products_list"]["categories"]) {
    values["content"]["products_list"]["categories"]["category_ids"] = values["productListCategories"];
  }
  
  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  mutate(updatedValues);
};
export default FashionFourSubmit;
