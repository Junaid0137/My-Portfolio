import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandAdobe,
    IconBrandGithub,
    IconBrandInstagram,
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
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/SyedJun46622680",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/junaid_0825/",
        },
        {
            title: "Menu",
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
