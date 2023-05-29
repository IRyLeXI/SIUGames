import React from "react";
import { useState } from "react";
import "./DropBox.css";

let Tags = "Теги: ";
const DropBox = () => {
    const [tag, setTag] = useState("Теги: ");
    return (
        <div>
            <details className="custom-select">
                <summary className="radios">
                    <input type="radio" name="item" id="default" title="Теги" defaultChecked />
                    <input type="radio" name="item" id="item1" title="Tags" />
                    <input type="radio" name="item" id="item2" title="Tags"/>
                    <input type="radio" name="item" id="item3" title="Tags"/>
                    <input type="radio" name="item" id="item4" title="Tags"/>
                    <input type="radio" name="item" id="item5" title="Tags"/>
                </summary>
                <ul className="list">
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Online"))}>Online</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Shooter"))}>Shooter</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "First Person"))}>First Person</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Third Person"))}>Third Person</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Sport"))}>Sport</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Racing"))}>Racing</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "Arcade"))}>Arcade</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "RPG"))}>RPG</label>
                    </li>
                    <li>
                        <label onClick={() => setTag(HandleClick(tag, "MMORPG"))}>MMORPG</label>
                    </li>
                </ul>
            </details>
            <h2>{tag}</h2>
        </div>
    );
}

function HandleClick(tags, newTag){
    if(tags.search(" #" + newTag)!==-1)
    {
        tags = tags.replace(" #" + newTag, "")
    }
    else
    {
        tags+=" #" + newTag;
    }
    Tags = tags;
    return tags;
}


export {DropBox, Tags};