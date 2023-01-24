
const repos = [
    {
        name: "emotio.me",
        url: 'gingerchew/emotio.me',
        description: "A one-day-at-a-time mood tracker."
    },
    {
        name: "its-a-fruit.farm",
        url: 'gingerchew/its-a-fruit.farm',
        description: "its-a-fruit.farm is an art project where fruits become webpages."
    },
    {
        name: "20XX.day",
        url: "gingerchew/20XX.day",
        description: "A dedication to the future and to optimism! Here's to 21XX!"
    },
    {
        name: "resourcesand.help",
        url: "gingerchew/resourcesand.help",
        description: "A collection of easy to parse resources for those in need of help."
    },
    {
        name: "GLightbox",
        url: "biati-digital/glightbox",
        description: "Contributor"
    },
    {
        name: "BiteSize",
        url: "gingerchew/bitesize.land",
        description: "Get the byte size of your code, gzip and brotli included."
    }
]



module.exports = [
    ...repos.map((item) => {
        item.url = 'https://github.com/' + item.url;
        return item;
    }),
];
