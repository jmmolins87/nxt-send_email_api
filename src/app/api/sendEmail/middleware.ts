

import { type NextRequest, NextResponse } from "next/server";

// middleware on nextjs to allow cors
export function middleware(req: NextRequest) {
    console.log(req.nextUrl);
    const res = NextResponse.next();
    res.headers.append("Access-Control-Allow-Origin", "*");
    res.headers.append("Access-Control-Allow-Credentials", "true");
    res.headers.append(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT"
    );
    res.headers.append(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    return res;
}

export const config = {
    matcher: ["/api/:path*"],
};