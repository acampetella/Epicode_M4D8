//endpoint da contattare e token da utilizzare per la fetch
const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODA3MTM2OTgsImV4cCI6MTY4MTkyMzI5OH0.N_Yr4TQ2Cc4qTFpBrUUgzeyVxQRYXwLd_TlAZtiXtX8";

//funzione che recupera i prodotti dall'endpoint
const getProducts = async () => {

    let products;
    try {
        showLoader();
        await fetch(endpoint, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        }).then(response => response.json()).then(data => products = data);
        hideLoader();
        return products;
    } catch (error) {
        console.log(error);
    }

};

//funzione che mostra il loader
const showLoader = () => {
    const loader = document.querySelector('div.loader');
    loader.classList.remove('d-none');
};

//funzione che nasconde il loader
const hideLoader = () => {
    const loader = document.querySelector('div.loader');
    loader.classList.add('d-none');
};