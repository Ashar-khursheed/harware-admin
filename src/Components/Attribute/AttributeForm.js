import { useQuery } from "@tanstack/react-query";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { attributeValues, nameSchema, YupObject } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import SimpleInputField from "../InputFields/SimpleInputField";
import CreateAttributes from "./Widgets/CreateAttributes";
import LanguageRedirection from "../CommonComponent/LanguageRedirection";

const AttributeForm = ({ mutate, updateId, loading, buttonName , language }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data: oldData,
    isLoading,
    refetch,
  } = useQuery(["role/id"], () => request({ url: `attribute/${updateId}` }, router), {
    refetchOnMount: false,
    enabled: false,
    select: (data) => data.data,
  });
  useEffect(() => {
    if (updateId) {
      refetch();
    }
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.name || "" : "",
        style: updateId ? oldData?.style || "" : "rectangle",
        value: updateId ? oldData?.attribute_values || [] : [{ value: "", hex_color: "" }],
      }}
      validationSchema={YupObject({
        name: nameSchema,
        value: attributeValues,
      })}
      onSubmit={(values) => {
        values["status"] = 1;
        mutate(values);
      }}
    >
      {({ values }) => (
        <Form className="theme-form theme-form-2 mega-form">
          {updateId && <LanguageRedirection id={updateId} path={'/attribute'} language={language}/>}
          <CreateAttributes />
          <Row className="mb-0 align-items-center">
            <Col sm="12">
              <FieldArray
                name="value"
                render={(arrayHelpers) => {
                  return (
                    <>
                    {values["value"].map((item, i) => (
                        <Fragment key={i}>
                          <Row className="g-sm-4 g-3 align-items-center attribute-row">
                            <Col className="custom-row">
                              <SimpleInputField nameList={[{ noshowerror: true, name: `value[${i}][value]`, title: "value", 
                                require: "true", placeholder: t("enter_value"), isremovefield:arrayHelpers, values:values, keys:i }]} />
                              <div className="invalid-feedback feedback-right "><ErrorMessage name={`value[${i}][value]`} render={(msg) => <div className="invalid-feedback d-block">{t("value_is_required")}</div>} /></div>
                            </Col>
                            {values.style == "color" && <SimpleInputField nameList={[{ name: `value[${i}][hex_color]`, type: "color", title: "value", placeholder: t("enter_value"), isremovefield:arrayHelpers, values:values, key:i }]} />}
                          </Row>
                        </Fragment>
                      ))}
                      <Col xs="4" className="offset-2">
                        <Btn className="btn-theme" onClick={() => arrayHelpers.push({ value: "" })} title="add_value" />
                      </Col>
                    </>
                  );
                }}
              />
            </Col>
          </Row>
          <div className="align-items-start value-form">
            <div className="d-flex">
              <FormBtn loading={Boolean(loading)} buttonName={buttonName} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AttributeForm;
