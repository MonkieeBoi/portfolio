"use client"

import Project from "./Project";

export default function Projects() {
    return (
        <section className="bg-gray-800 relative w-screen flex flex-row items-start justify-evenly">
            <Project
                name="Spnw"
                desc="Habit tracker"
                link="https://github.com/yunz-dev/spnw-api"
                img="/next.svg"
            />

            <Project
                name="yawl"
                desc="yet another wishlist"
                link="https://github.com/monkieeboi/yawl"
                img="/vercel.svg"
            />
        </section>
    );
}
