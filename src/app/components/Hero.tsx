"use client"

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const birthYear = 2005;
    const year = new Date().getFullYear();
    const age = year - birthYear;

    const scrollToSkills = () => {
        document.querySelector("section + section")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="bg-gray-900 relative h-screen w-screen flex flex-row flex-wrap justify-center items-center">
            <div className="w-3/4 flex flex-row flex-wrap justify-between items-center">
                <div className="m-5 flex flex-col items-start">
                    <h1 className="font-bold text-4xl">Simon Nguyen</h1>
                    <h2 className="font-bold text-lg">Aspiring Software Engineer</h2>
                    <div className="m-2 flex flex-row items-center justify-center gap-4">
                        <Link href="https://github.com/MonkieeBoi" target="_blank">
                            <Image
                                src="/logos/github.svg"
                                alt="github logo"
                                className="size-5 cursor-pointer"
                                width={0}
                                height={0}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/simon-danh" target="_blank">
                            <Image
                                src="/logos/linked_in.png"
                                alt="linked in logo"
                                className="size-5 cursor-pointer"
                                width={0}
                                height={0}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-start rounded p-2 gap-2 m-5">
                    <div className="bg-gray-700 p-2 rounded w-full flex flex-row gap-2">
                        <Image
                            src="/icons/calendar.svg"
                            alt="calendar icon"
                            className="size-5"
                            width={0}
                            height={0}
                        />
                        <h1>{age} y/o</h1>
                    </div>
                    <div className="bg-gray-700 p-2 rounded w-full flex flex-row gap-2">
                        <Image
                            src="/icons/school.svg"
                            alt="school icon"
                            className="size-5"
                            width={0}
                            height={0}
                        />
                        <h1>UYSD (3rd year)</h1>
                    </div>
                    <div className="bg-gray-700 p-2 rounded w-full flex flex-row gap-2">
                        <Image
                            src="/icons/major.svg"
                            alt="university major icon"
                            className="size-5"
                            width={0}
                            height={0}
                        />
                        <h1>Computer Science</h1>
                    </div>
                </div>
            </div>
            <button
                className="bg-gray-800 rounded-full p-1 absolute bottom-7 right-7"
                onClick={scrollToSkills}
            >
                <Image
                    src="/icons/arrow-down.svg"
                    alt="down arrow"
                    className="size-8"
                    width={0}
                    height={0}
                />
            </button>
        </section>
    );
}
