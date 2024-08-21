"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo({ img, name }) {
    return (
        <div className="h-[20rem] w-full flex items-center justify-center ">
            <PinContainer
                title="React, Naxt, tailwind"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col tracking-tighter text-slate-100/50 sm:basis-1/2 w-[25rem] h-[15rem] items-center justify-center">
                    <img className="object-cover rounded-lg" src={img} alt="" />
                </div>
            </PinContainer>
        </div>
    );
}
