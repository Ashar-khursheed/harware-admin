// import { NextResponse } from "next/server";
// import { selfData } from "./Utils/AxiosUtils/API";
// import ConvertPermissionArr from "./Utils/CustomFunctions/ConvertPermissionArr";
// import { replacePath } from "./Utils/CustomFunctions/ReplacePath";

// export async function middleware(request) {
//   const path = request.nextUrl.pathname;
//   if (path.split("/")[1] !== "auth" && !request.cookies.has("uat_multikart")) {
//     return NextResponse.redirect(new URL(`/auth/login`, request.url));
//   }

//   if (path.split("/")[1] == "auth" && request.cookies.has("uat_multikart")) {
//     return NextResponse.redirect(new URL(`/dashboard`, request.url));
//   }

//   if (path != `/auth/login`) {
//     if (path == `/auth/otp-verification` && !request.cookies.has("ue_multikart")) {
//       return NextResponse.redirect(new URL(`/auth/login`, request.url));
//     }
//     if (path == `/auth/update-password` && (!request.cookies.has("uo_multikart") || !request.cookies.has("ue_multikart"))) {
//       return NextResponse.redirect(new URL(`/auth/login`, request.url));
//     }
//   }

//   if (request.headers.get("x-redirected")) {
//     return NextResponse.next();
//   }

//   if (request.cookies.has("uat_multikart") && !path.split("/dashboard")[1] && path !== "/403") {
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `Bearer ${request.cookies.get("uat_multikart")?.value}`);

//     let requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     let data;
//     if (!request.cookies.has("uat_multikart")) {
//       data = await (await fetch(process.env.NEXT_PUBLIC_API_PROD_URL + selfData, requestOptions))?.json();
//     } else {
//       data = await (await fetch(process.env.NEXT_PUBLIC_API_PROD_URL + selfData, requestOptions))?.json();
//     }
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const hasToken = request.cookies.has("uat_multikart");
  const hasOtpToken = request.cookies.has("uo_multikart");
  const hasEmailToken = request.cookies.has("ue_multikart");

  if (path.startsWith("/auth") && hasToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!path.startsWith("/auth") && !hasToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (path === "/auth/otp-verification" && !hasEmailToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (path === "/auth/update-password" && (!hasOtpToken || !hasEmailToken)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
