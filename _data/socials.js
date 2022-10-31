/**
 * 
 * title == The short name of inside of the link
 * url == The 'landing' page for the specific social
 * social == The social network name
 * 
 * E.g.
 * 
 * If the expected outcome is:
 * <span>Twitter: <a href="https://twitter.com/username">Username</a></span>
 * 
 * Then the object would look like:
 * {
 *      "title":"Username",
 *      "url":"https://twitter.com/username",
 *      "social":"Twitter"
 * }
 * 
 */

module.exports = [
    {
        "title":"Here! (Under Construction)",
        "url":"https://ginger.wtf/",
        "social":"Website"
    },
    {
        "title": "@gingercheww",
        "url":"https://twitter.com/gingercheww",
        "social":"Twitter"
    },
    {
        "title":"@gingerchew",
        "url":"https://cohost.org/gingerchew",
        "social":"Cohost!"
    },
    {
        "title":"@gingerchew@queer.party",
        "url":"https://queer.party/@gingerchew",
        "social":"Mastodon"
    },
    {
        "title":"My Code",
        "url":"https://github.com/gingerchew",
        "social":"Github"
    }
]