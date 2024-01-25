import React from "react";

export default function BlogLayout({
                                       children,
                                        }: {
    children: React.ReactNode
}) {
    return <section className="container w-1/2 py-2">
        {children}
    </section>
}