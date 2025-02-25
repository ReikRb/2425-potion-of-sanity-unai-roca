import fetch from 'node-fetch';

export async function getData() {
    try {
        const result = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        return result.json();
    } catch (error) {
        console.log(error.message);  
    }
}
