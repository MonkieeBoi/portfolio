"use client"

import Link from "next/link";
import Image from "next/image";

export default function Links() {
    return (
        <div className="bg-gray-900 relative w-screen p-5 flex flex-row items-center justify-center gap-4">
            <Link href="https://github.com/MonkieeBoi" target="_blank">
                <Image
                    src="/images/github.svg"
                    alt="github-logo"
                    className="size-5 cursor-pointer"
                    width={0}
                    height={0}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/simon-danh" target="_blank">
                <Image
                    src="/images/linked_in.png"
                    alt="github-logo"
                    className="size-5 cursor-pointer"
                    width={0}
                    height={0}
                />
            </Link>
        </div>
    )
}
