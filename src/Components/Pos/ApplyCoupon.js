import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "reactstrap";
import offerImg from "../../../public/assets/images/offer.gif";
import Btn from "../../Elements/Buttons/Btn";
import SettingContext from "../../Helper/SettingContext";

const ApplyCoupon = ({ data, setFieldValue, storeCoupon, setStoreCoupon, values, mutate, isLoading, errorCoupon, appliedCoupon, setAppliedCoupon }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const onCouponApply = (value) => {
    setStoreCoupon(value);
  };
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setFieldValue("coupon", "");
    setStoreCoupon("");
    mutate({ ...values, coupon: "" });
  };
  const onCouponApplyClick = () => {    
    values["products"]?.length > 0 && mutate({ ...values, coupon: storeCoupon });
    setFieldValue("coupon", storeCoupon);
  };
  return (
    <>
      {appliedCoupon == "applied" ? (
        <li className="coupon-sec">
          <div className="apply-sec mb-3">
            <div>
              <Image src={offerImg} className="img-fluid" height={20} width={20} alt="apply" />
              <h4>
                {t("you_saved")} <span>{convertCurrency(data?.data?.total?.coupon_total_discount)}</span> {t("with this code")} 🎉 <p>{t("coupon_applied")}</p>
              </h4>
            </div>
            <a onClick={() => removeCoupon()}>{t("remove")}</a>
          </div>
        </li>
      ) : (
        <li>
          <div className="coupon-box mt-2 mb-3 d-flex w-100">
            <div className="input-group">
              <Input type="text" className="form-control" placeholder={t("EnterCoupon")} onChange={(e) => onCouponApply(e.target.value)} value={storeCoupon} />
              <Btn className="btn-apply" loading={Number(isLoading)} onClick={onCouponApplyClick}>
                {t("apply")}
              </Btn>
            </div>
          </div>
          <div className="invalid-feedback d-block">{errorCoupon}</div>
        </li>
      )}
    </>
  );
};

export default ApplyCoupon;
