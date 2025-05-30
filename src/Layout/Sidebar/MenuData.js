import { RiArticleLine, RiCoinsLine, RiContactsLine, RiCoupon2Line, RiCurrencyFill, RiExchangeDollarFill, RiHomeLine, RiImageLine, RiListUnordered, RiPagesLine, RiPercentLine, RiQuestionnaireLine, RiRefund2Line, RiSettings3Line, RiStore2Line, RiStore3Line, RiTruckLine, RiWalletLine,RiGlobalLine, RiWindowLine,RiCrosshair2Line,RiFundsBoxLine,RiStarLine,RiNotificationLine } from "react-icons/ri";

const MENUITEMS = [
  {
    title: "dashboard",
    displayTitle: "Dashboard",
    icon: <RiHomeLine />,
    path: "/dashboard",
    type: "link"
  },
  {
    title: "users",
    displayTitle: "Users",
    icon: <RiContactsLine />,
    type: "sub",
    children: [
      { title: "add_user", path: "/user/create", displayTitle: "AddUser", permission: ["user.create"] },
      { title: "all_users", path: "/user", displayTitle: "AllUsers", permission: ["user.index"] },
      { title: "role", path: "/role", displayTitle: "Role", permission: ["role.index"] },
    ],
  },
  {
    title: "products",
    displayTitle: "Products",
    icon: <RiStore3Line />,
    type: "sub",
    children: [
      { title: "add_product", path: "/product/create", displayTitle: "Add Product", permission: ["product.create"] },
      { title: "all_products", path: "/product", displayTitle: "All Product", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["product.create"] },
      { title: "attributes", path: "/attribute", displayTitle: "All Attributes", permission: ["attribute.index", "attribute.create"] },
      { title: "categories", path: "/category", displayTitle: "Categories", permission: ["category.index"] },
      { title: "tags", path: "/tag", displayTitle: "All Tag", permission: ["tag.index", "tag.create"] },
      { title: "brands", path: "/brand", displayTitle: "Brand", permission: ["brand.index", "brand.create"] },
      {
        title: "authors",
        path: "/author",
        displayTitle: "Authors",
        permission: ["author.index", "author.create"],
      },
      {
        title: "publications",
        path: "/publication",
        displayTitle: "Publication",
        permission: ["publication.index", "publication.create"],
      },
      { title: "Q&A", path: "/qna", displayTitle: "Q&A", permission: ["question_and_answer.index", "question_and_answer.create"] },
      { title: "license_key", path: "/license_key", displayTitle: "License Key", permission: ["license_key.index"] },
    ],
  },
  {
    title: "reports",
    displayTitle: "Reports",
    icon: <RiFundsBoxLine />,
    path: "/reports",
    permission: ["user.index"],
    type: "link",
  },
  {
    title: "stores",
    displayTitle: "Store",
    icon: <RiStore2Line />,
    type: "sub",
    children: [
      { title: "add_store", path: "/store/create", displayTitle: "Add Store", permission: ["store.create"] },
      { title: "all_stores", path: "/store", displayTitle: "All Stores", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["store.index"] },
      { title: "wallet", path: "/vendor_wallet", displayTitle: "Wallets", permission: ["vendor_wallet.index"] },
      { title: "commission_history", path: "/commission", displayTitle: "Commission History", permission: ["commission_history.index"] },
      { title: "PaymentDetails", path: "/payment_account", displayTitle: "Payment Details", permission: ["payment_account.create"] },
      { title: "withdrawal", displayTitle: "Withdrawal", path: "/withdraw_request", badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0, permission: ["withdraw_request.index"] },
    ],
  },
  {
    title: "orders",
    displayTitle: "Orders",
    icon: <RiListUnordered />,
    type: "sub",
    children: [
      { title: "all_orders", path: "/order", displayTitle: "All Orders", permission: ["order.index"] },
      { title: "create_order", path: "/order/create", displayTitle: "Create Order", permission: ["order.create"] }],
  },
  {
    title: "media",
    displayTitle: "Media",
    icon: <RiImageLine />,
    path: "/attachment",
    permission: ["attachment.index", "attachment.create"],
    type: "link"
  },
  {
    title: "blog",
    displayTitle: "Blog",
    icon: <RiArticleLine />,
    type: "sub",
    children: [
      { title: "all_blogs", path: "/blog", displayTitle: "All Blog", permission: ["blog.index"], },
      { title: "categories", path: "/blog/category", displayTitle: "Category", permission: ["category.index", "category.create"], },
      { title: "tags", path: "/blog/tag", displayTitle: "Tags", permission: ["tag.index", "tag.create"] },
    ],
  },
  {
    title: "pages",
    displayTitle: "Pages",
    icon: <RiPagesLine />,
    path: "/page", permission: ["page.index"],
    type: "link"
  },
  {
    title: "taxes",
    displayTitle: "Taxes",
    icon: <RiPercentLine />,
    path: "/tax", permission: ["tax.index"],
    type: "link"
  },

  {
    title: "shipping",
    displayTitle: "Shipping",
    icon: <RiTruckLine />,
    path: "/shipping",
    permission: ["shipping.index"],
    type: "link"
  },
  {
    title: "coupons",
    displayTitle: "Coupons",
    icon: <RiCoupon2Line />,
    path: "/coupon",
    permission: ["coupon.index"],
    type: "link"
  },
  {
    title: "currencies",
    displayTitle: "Currency",
    icon: <RiCurrencyFill />,
    path: "/currency",
    permission: ["currency.index"],
    type: "link"
  },
  {
    title: "points",
    displayTitle: "Point",
    icon: <RiCoinsLine />,
    path: "/point",
    permission: ["point.index"],
    type: "link"
  },
  {
    title: "wallet",
    displayTitle: "Wallet",
    icon: <RiWalletLine />,
    path: "/wallet",
    permission: ["wallet.index"],
    type: "link"
  },
  {
    title: "refund",
    displayTitle: "Refund",
    icon: <RiExchangeDollarFill />,
    path: "/refund",
    permission: ["refund.index"],
    badgeType: 'badge bg-warning text-dark ml-3', badgeValue: 0,
    type: "link"
  },
  {
    title: "reviews",
    displayTitle: "Reviews",
    icon: <RiStarLine />,
    path: "/review",
    permission: ["review.index"],
    type: "link"
  },
  {
    title: "FAQ's",
    displayTitle: "FAQ's",
    icon: <RiQuestionnaireLine />,
    path: "/faq",
    permission: ["faq.index"],
    type: "link"
  },
  {
    title: "Notice",
    displayTitle: "Notice",
    icon: <RiArticleLine />,
    path: "/notice",
    permission: ["notice.index", "notice.create"],
    type: "link"
  },
  {
    title: "Subscription",
    displayTitle: "Subscription",
    icon: <RiNotificationLine />,
    path: "/subscription",
    permission: ["subscribe.index"],
    type: "link"
  },
  {
    title: "store_front",
    displayTitle: "Store Front",
    icon: <RiWindowLine />,
    type: "sub",
    children: [
      { title: "themes", path: "/theme", displayTitle: "Theme", permission: ["theme.index"], },
      { title: "theme_options", path: "/theme_option", displayTitle: "Theme Option", permission: ["theme_option.index"], },
      { title: "menu", path: "/menu", displayTitle: "Menu", permission: ["menu.index"], }
    ],
  },
  {
    title: "language",
    displayTitle: "Language",
    icon: <RiGlobalLine />,
    type: "sub",
    children: [
      {
        title: "add_language",
        path: "/language/create",
        displayTitle: "AddLanguage",
        permission: ["language.create"],
        type: "link",
      },
      {
        title: "all_languages",
        path: "/language",
        displayTitle: "AllLanguages",
        permission: ["language.index"],
        type: "link",

      },
    
    ],
  },
  {
    title: "zone",
    displayTitle: "Zone",
    icon: <RiCrosshair2Line />,
    path: "/zone",
    permission: ["zone.index"],
    type: "link",
  },
  {
    title: "settings",
    displayTitle: "Settings",
    icon: <RiSettings3Line />,
    path: "/setting",
    permission: ["setting.index"],
    type: "link"
  },
  // {
  //   title: "appSettings",
  //   displayTitle: "appSettings",
  //   icon: <RiSettings3Line />,
  //   path: "/app-setting",
  //   permission: ["setting.index"],
  //   type: "link"
  // }
];

export default MENUITEMS;