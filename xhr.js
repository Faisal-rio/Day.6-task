const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = () => {
    const response = JSON.parse(xhr.responseText);

    console.log(response.filter(({ currencies = {} }) => Object.keys(currencies).includes("USD")));                                     
};

xhr.onerror = () => console.error('Request failed.');



