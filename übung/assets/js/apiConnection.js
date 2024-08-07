let result;

async function getApiData(prompt) {
    const url = 'https://brigid-ai.p.rapidapi.com/v2';
    let options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '3e7eeb46c3mshdd291cfd066e680p187224jsncdc506794d12',
            'x-rapidapi-host': 'brigid-ai.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: `${prompt}`,
            force_transliteration: 'true',
            web_search: 'false'
        })
    };
    let apiPromise = new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    reject('Network response was not ok: ' + response.statusText);
                }
                return response.text();
            })
            .then(async result => {
                result = JSON.parse(result);
                result.llm_output = result.llm_output.replace("**Speak**", "");
                result.llm_output = result.llm_output.substring(0, result.llm_output.indexOf("**Start**"));
                result.llm_output = result.llm_output.trim();
                // if (result.llm_output.length == 0 || result.llm_output == "" ) {
                //     getApiData();
                //     return;
                // };
                resolve(result);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                reject(error);
            });
    });
    try {
        result = await apiPromise;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
export { getApiData, result as apiResult } ;
