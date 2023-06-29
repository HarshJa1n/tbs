// resourcesData.js

const resourcesData = [
    {
        id: 1,
        title: "Machine Learning",
        image: "https://github.com/tanav2202/tanav2202.github.io/blob/main/assets/ml1.png?raw=true",
        links: [
            {
                id: 1,
                title: "Book on Introduction to Machine Learning",

                url: "https://example.com/intro-to-ml",
            },
            {
                id: 2,
                title: "Supervised Learning",
                url: "https://example.com/supervised-learning",
            },
            {
                id: 3,
                title: "Unsupervised Learning",
                url: "https://example.com/unsupervised-learning",
            },
        ],
        subtopics: [
            {
                id: 1,
                title: "Linear Regression",
                subLinks: ["https://example.com/linear-regression", "https://example.com/linear-regression-2"]
            },
            {
                id: 2,
                title: "Logistic Regression",
                subLinks: ["https://example.com/logistic-regression", "https://example.com/logistic-regression-2"]
            },
            {
                id: 3,
                title: "Decision Trees",
                subLinks: ["https://example.com/decision-trees", "https://example.com/decision-trees-2"]
            },
        ],

        URLs: ["https://example.com/linear-regression", "https://example.com/logistic-regression", "https://example.com/decision-trees"],
    },
    {
        id: 2,
        title: "Artificial Intelligence",
        image: "https://github.com/tanav2202/tanav2202.github.io/blob/main/assets/mll23.jpg?raw=true",
        links: [
            {
                id: 1,
                title: "Introduction to Artificial Intelligence",
                url: "https://example.com/intro-to-ai",
            },
            {
                id: 2,
                title: "Natural Language Processing",
                url: "https://example.com/natural-language-processing",
            },
            {
                id: 3,
                title: "Computer Vision",
                url: "https://example.com/computer-vision",
            },
        ],
        subtopics: [
            {
                id: 1,
                title: "Neural Networks",
                subLinks: ["https://example.com/neural-networks", "https://example.com/neural-networks-2"]
            },
            {
                id: 2,
                title: "Genetic Algorithms",
                subLinks: ["https://example.com/genetic-algorithms", "https://example.com/genetic-algorithms-2"]
            },
            {
                id: 3,
                title: "Expert Systems",
                subLinks: ["https://example.com/expert-systems", "https://example.com/expert-systems-2"]
            },
        ],
        URLs: ["https://example.com/neural-networks", "https://example.com/genetic-algorithms", "https://example.com/expert-systems"],
    },
];

export default resourcesData;
