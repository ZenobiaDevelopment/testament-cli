import puppeteer from 'puppeteer';

export function GenerateASCII(String) {
    async function fetchContent(url, selector) {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto(url);

        await page.waitForSelector(selector);

        const content = await page.$eval(selector, element => element.innerHTML);

        await browser.close();

        return content;
    }

    const url = 'https://patorjk.com/software/taag/#p=display&f=Big&t=' + String;
    const divSelector = 'pre#taag_output_text';

    fetchContent(url, divSelector)
        .then(content => {
            console.log(content);
        })
        .catch(error => console.error('Error fetching data:', error));


}


export default {GenerateASCII};