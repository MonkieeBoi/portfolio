"use client"

import Project from "./Project";
import Image from "next/image"

export default function Projects() {
    return (
        <section className="bg-gray-800 relative w-screen flex flex-col items-center p-5">
            <h1 className="font-bold text-3xl">Projects</h1>
            <div className="p-5 w-full flex flex-row flex-wrap items-stretch justify-center gap-10">
                <Project
                    pTitle="spnw"
                    source="https://github.com/yunz-dev/spnw-api"
                    img="/images/spnw.png"
                    tags={["python", "fastapi", "htmx", "alpinejs", "tailwindcss", "mongodb"]}
                />

                <Project
                    source="https://github.com/monkieeboi/yawl"
                    img="/logos/express.svg"
                    tags={["javascript", "react", "expressjs", "mongodb"]}
                />

                <Project
                    source="https://github.com/MonkieeBoi/goana"
                    img="/images/goana.png"
                    tags={["go", "sqlite"]}
                />
            </div>

            <a
                href="https://github.com/monkieeboi"
                target="_blank"
                className="flex flex-row gap-1 items-center"
            >
                All Projects
                <Image
                    src="/icons/hyperlink.svg"
                    alt="star"
                    className="size-4 inline"
                    width={0}
                    height={0}
                />
            </a>
        </section>
    );
}
