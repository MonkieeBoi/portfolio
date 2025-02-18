"use client"

import Project from "./Project";

export default function Projects() {
    return (
        <section className="bg-gray-800 p-10 relative w-screen flex flex-row flex-wrap items-center justify-center gap-10">
            <Project
                pTitle="spnw"
                source="https://github.com/yunz-dev/spnw-api"
                img="/vercel.svg"
            />

            <Project
                source="https://github.com/monkieeboi/yawl"
                img="/vercel.svg"
            />
        </section>
    );
}
