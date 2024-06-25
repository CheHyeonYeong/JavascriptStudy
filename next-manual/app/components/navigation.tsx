"use client";       //  marking 이 컴포넌트는 클라이언트에서 동작하는 녀석이다.

import Link from "next/link"; // Importing Link component from Next.js for client-side routing.
import { usePathname } from "next/navigation"; // Importing usePathname hook from Next.js for getting the current pathname.

export default function Navigation() { // 경로들 중에서 특정 정보를 불러옴, 리액트 훅으로 client side로 동작
    const path = usePathname(); // Using usePathname hook to get the current pathname.

    return (
        <nav>
            <ul>
                {/* Navigation items with conditional highlighting based on current path */}
                <li><Link href={"/"}>Home {path === "/" ? "<---" : null}</Link></li>
                <li><Link href={"/about-us"}>About Us {path === "/about-us" ? "<---" : null}</Link></li>
                <li><Link href={"/info"}>Info {path === "/info" ? "<---" : null}</Link></li>
                {/* Regular anchor tags for external links */}
                <li><Link href="/company">Company {path === "/company" ? "<---" : null}</Link></li>
                <li><Link href="/company/jobs/sales">Sales {path === "/company/jobs/sales" ? "<---" : null}</Link></li>
            </ul>
        </nav>
    );
}
