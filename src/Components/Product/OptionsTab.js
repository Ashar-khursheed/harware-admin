import CheckBoxField from "../InputFields/CheckBoxField";

const OptionsTab = () => {
  return (
    <>
      <CheckBoxField name="is_featured" title="featured" helpertext="*Enabling this option will display a Featured tag on the product." />
      <CheckBoxField name="safe_checkout" title="safe_checkout" helpertext="*A safe checkout image will appear on the product page. Modify the image in the theme options." />
      <CheckBoxField name="secure_checkout" title="secure_checkout" helpertext="*A secure checkout image will appear on the product page. Modify the image in the theme options." />
      <CheckBoxField name="social_share" title="social_share" helpertext="*Enable this option to allow users to share the product on social media platforms." />
      <CheckBoxField name="encourage_order" title="encourage_order" helpertext="*A random order count between 1 and 100 will be displayed to motivate user purchases." />
      <CheckBoxField name="encourage_view" title="encourage_view" helpertext="*This feature encourages users to view products by presenting engaging content or prompts." />
      <CheckBoxField name="is_trending" title="Trending" helpertext="*Enabling this will showcase the product in the sidebar of the product page as a trending item." />
      <CheckBoxField name="status" helpertext="*Toggle between Enabled and Disabled to control the availability of the product for purchase." />
    </>
  );
};

export default OptionsTab;
