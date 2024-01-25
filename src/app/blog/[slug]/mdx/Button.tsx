"use client";

import { useState } from "react";

export default function Button({ text }: { text: string }) {
    const [toggle, setToggle] = useState(false);

    return (
        <button onClick={() => setToggle(!toggle)}>
            {toggle ? text : "Click Me"}
        </button>
    );
}
