"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    //for accessibility, on desktop, when the user presses the Esc key, the nav menu should close if its open.
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }
        };
        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, []);

    // If the Nav menu is open and the user clicks outside the nav menu, anywhere on the page, it should close the menu.
    const navRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(navRef, () => setActiveIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {
                // handleOpen keeps track of which NavItem is currently open.
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else setActiveIndex(i);
                };

                const isOpen = i === activeIndex;

                return (
                    <NavItem
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                        key={category.value}
                    />
                );
            })}
        </div>
    );
};

export default NavItems;
