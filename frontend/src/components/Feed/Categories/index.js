import { useEffect } from "react";

import CategoryIndexItem from "./CategoryIndexItem";
import FilterButton from "./FilterButton";

import './Categories.css';

import lakefront from "./icons/lakefront-icon.png";
import desert from "./icons/desert-icon.png";
import beach from "./icons/beach-icon.png";
import farm from "./icons/farm-icon.png";
import tropical from "./icons/tropical-icon.png";
import cave from "./icons/cave-icon.png";
import arctic from "./icons/arctic-icon.png";
import cabin from "./icons/cabin-icon.png";
import castle  from "./icons/castle-icon.png";
import dome from "./icons/dome-icon.png";
import boat from "./icons/boat-icon.png";
import windmill from "./icons/windmill-icon.png";
import camper from "./icons/camper-icon.png";

const Categories = () => {
    const categoryIcons = {
        'Lakefront': lakefront,
        'Desert': desert,
        'Beach': beach,
        'Farm': farm,
        'Tropical': tropical,
        'Cave': cave,
        'Arctic': arctic,
        'Cabin': cabin,
        'Castle': castle,
        'Dome': dome,
        'Boat': boat,
        'Windmill': windmill,
        'Camper': camper
    };

    useEffect(() => {
        const categoryIndexScroll = e => {
            if (window.scrollY === 0) {
                document.querySelector(".cat-idx-container").classList.remove("cat-idx-scroll");
            } else {
                document.querySelector(".cat-idx-container").classList.add("cat-idx-scroll");
            }
        }

        document.addEventListener("scroll", categoryIndexScroll)

        return () => document.removeEventListener("scroll", categoryIndexScroll);
    }, [])

    return (
        <div className="cat-container">
            <div className="cat-idx-buffer"></div>
            <div className="cat-idx-container">
                <ul className="cat-idx">
                    {Object.keys(categoryIcons).map((category, i) => <CategoryIndexItem category={category} icon={categoryIcons[category]} key={category+i} />)}
                </ul>
                <FilterButton />
            </div> 
        </div>
    );
}

export default Categories;