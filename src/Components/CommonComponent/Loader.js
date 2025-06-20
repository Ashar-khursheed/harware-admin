
// import { useTranslation } from "react-i18next";

// const Loader = () => {
  
//   const { t } = useTranslation("common");
//   return (
//     <div className="loader-wrapper">
//       <div>
//         <div className="loader"></div>
//         <h3>{t("loading")}</h3>
//       </div>
//     </div>
//   );
// };

// export default Loader;
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div>
        <div className="loader"></div>
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loader;
