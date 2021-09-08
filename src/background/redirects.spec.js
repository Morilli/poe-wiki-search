import { redirectFromFandom, redirectFromGoogle, redirectFromDdg } from "./redirects.js"

describe("Fandom redirect", () => {
    it.each([
        {
            url: "https://pathofexile.fandom.com/wiki/Faster_Attacks_Support",
            expected: "https://www.poewiki.net/wiki/Faster_Attacks_Support",
        },
        {
            url: "https://pathofexile.fandom.com/wiki/Ascendancy_class",
            expected: "https://www.poewiki.net/wiki/Ascendancy_class",
        },
        {
            url: "https://pathofexile.fandom.com/wiki/Path_of_Exile_Wiki",
            expected: "https://www.poewiki.net/wiki/Path_of_Exile_Wiki",
        },
    ])("Given $url, redirect to $expected", ({ url, expected }) => {
        const actual = redirectFromFandom({ url })
        expect(actual.redirectUrl).toBe(expected)
    })
})

describe("Google Search redirect", () => {
    it.each([
        {
            url: "https://www.google.com/search?q=poe+faster+attacks",
            expected: "https://www.google.com/search?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://www.google.com/search?client=firefox-b-1-d&q=poe+faster+attacks",
            expected: "https://www.google.com/search?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://www.google.com/search?q=poe+faster+attacks&rlz=1CDSA2EA_enUS653US116&oq=poe+test+wiki&aqs=chrome..6213i57j64.1j7&sourceid=chrome&ie=UTF-8",
            expected: "https://www.google.com/search?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://google.com/search?q=poe+faster+attacks",
            expected: "https://www.google.com/search?q=site:poewiki.net+faster+attacks",
        },
    ])("Given $url, redirect to $expected", ({ url, expected }) => {
        const actual = redirectFromGoogle({ url })
        expect(actual.redirectUrl).toBe(expected)
    })
})

describe("DuckDuckGo Search redirect", () => {
    it.each([
        {
            url: "https://duckduckgo.com/?q=poe+faster+attacks",
            expected: "https://www.duckduckgo.com/?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://duckduckgo.com/?client=firefox-b-1-d&q=poe+faster+attacks",
            expected: "https://www.duckduckgo.com/?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://duckduckgo.com/?q=poe+faster+attacks&rlz=1CDSA2EA_enUS653US116&oq=poe+test+wiki&aqs=chrome..6213i57j64.1j7&sourceid=chrome&ie=UTF-8",
            expected: "https://www.duckduckgo.com/?q=site:poewiki.net+faster+attacks",
        },
        {
            url: "https://duckduckgo.com/?q=poe+faster+attacks",
            expected: "https://www.duckduckgo.com/?q=site:poewiki.net+faster+attacks",
        },
    ])("Given $url, redirect to $expected", ({ url, expected }) => {
        const actual = redirectFromDdg({ url })
        expect(actual.redirectUrl).toBe(expected)
    })
})
