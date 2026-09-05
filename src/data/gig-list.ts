const video = (overrides: { src: string; title: string; height?: number; }) => ({
    type: "video",
    height: 500,
    ...overrides,
});

export const gigList = [
    video({
        src: "https://www.youtube.com/embed/1FA1FQNPv9g",
        title: "Barnsley - Honeywell Inn - 1st September 2026",
        height: 315,
    }),
    {
        type: "audio",
        href: "/audio/holly-bush.m4a",
        label: "Holly Bush (27th August) - Listen to the audio",
    },
    video({
        src: "https://www.youtube.com/embed/9sg0S5Zf-fg",
        title: "Nottingham - FunnySods - 26th August 2026",
        height: 315,
    }),
    video({
        src: "https://www.youtube.com/embed/JlBqoyLaqpc",
        title: "Nottingham - SummitsUp - 24th July 2026",
        height: 315,
    }),
    video({
        src: "https://www.youtube.com/embed/IbSlNdlzHA0",
        title: "Lamb Comedy - 7th April 2026",
    }),
    video({
        src: "https://www.youtube.com/embed/Faqku80pjjs",
        title: "Lamb Comedy - 25th March 2026",
    }),
    {
        type: "audio",
        href: "/audio/st-ives-corn-exchange.m4a",
        label: "St Ives Corn Exchange (21st March) - Listen to the audio",
    },
    video({
        src: "https://www.youtube.com/embed/9W1eq3XLv5E",
        title: "Carlton Tavern - 11th March 2026",
    }),
    video({
        src: "https://www.youtube.com/embed/g6bLpiatZ7M",
        title: "Lamb Comedy - 3rd February 2026",
    }),
    video({
        src: "https://www.youtube.com/embed/JDy8HqO_kGs?si=18T2tbtxD1ZvnDBk",
        title: "Ultra - 21st December 2025 alternate",
        height: 315,
    }),
    video({
        src: "https://www.youtube.com/embed/PTA4TUzhksM?si=wR-TQuJL_uBiNIWs",
        title: "Ultra - 21st December 2025",
        height: 315,
    }),
];