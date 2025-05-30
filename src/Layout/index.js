'use client'
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import ConvertPermissionArr from "../Utils/CustomFunctions/ConvertPermissionArr";
import { replacePath } from "../Utils/CustomFunctions/ReplacePath";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SettingContext from "@/Helper/SettingContext";
import LanguageContext from "@/Helper/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import request from "@/Utils/AxiosUtils";
import { AllLanguageApi } from "@/Utils/AxiosUtils/API";


const Layout = (props) => {
  const [mode, setMode] = useState(false);
  const [ltr, setLtr] = useState(true);
  const { settingObj } = useContext(SettingContext); 
  const { localLanguage } = useContext(LanguageContext);

  const router = useRouter();
  const path = usePathname();
  let data1 = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) data1 = localStorage.getItem("account_multikart") && JSON.parse(localStorage.getItem("account_multikart"));
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.body.classList.add("version=2.0.0")
  }, []);
  useEffect(() => {
    mode ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only");
  }, [mode, ltr]);

  // useEffect(() => {
  //   const securePaths = mounted && ConvertPermissionArr(data1?.permissions);
  //   // if (mounted && !securePaths.find((item) => item?.name == replacePath(path?.split("/")[2]))) {
  //   //   // router.push("/403");
  //   // }
  // }, [data1]);

  const { data } = useQuery(["newLang"], () => request({ url: AllLanguageApi }), {enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false, select: (res) => res.data.data });

    useEffect(() => {
      const lang = data?.find(lang => lang.locale === localLanguage)?.is_rtl
      if(lang) {
        if((settingObj?.general?.admin_site_language_direction === 'rtl') || !!settingObj?.general?.default_language?.is_rtl ){
          (document.documentElement.dir = lang === 0 ? "ltr" : "rtl");
        }else {
          (document.documentElement.dir = lang === 0 ? "ltr" : "rtl")
        }
      }
  }, [settingObj, localLanguage]);

  return (
    <>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header setMode={setMode} mode={mode} setLtr={setLtr} settingData={'settingData'} />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
            <Container fluid={true}>
              {props.children}
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
