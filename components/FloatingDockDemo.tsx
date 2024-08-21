import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandAdobe,
    IconBrandGithub,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandYoutube,
    IconExchange,
    IconHome,
    IconMenu,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Junaid0137",
        },

        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/syed-ameer-junaid-792144227/",
        },
        {
            title: "Leetcode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://leetcode.com/u/Junaid_137/",
        },
        {
            title: "twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Youtube",
            icon: (
                <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "www.x.com",
        },
        {
            title: "GitHub",
            icon: (
                <IconMenu className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full z-50">
            <FloatingDock
                mobileClassName="" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
