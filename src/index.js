const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {                 // calling an event listener for the submit button
        event.preventDefault();                            // this stops fromt he page refreshing after the submit button
        const input = document.querySelector('input#searchByID');     // grabbing a specific information input#searchByID
        console.log(input.value);                       // consol logging the value of the input variable

        fetch(`http://localhost:3000/movies/${input.value}`) //using interpolation we can access a specic text in the sumbit box
        .then(response => response.json())        // changes the text to json to make it readible
        .then(data => {                           // storing the date retrieved from the server
            const title = document.querySelector('section#movieDetails h4');        // first set of information you can add id attributes like h4
            const summary = document.querySelector('section#movieDetails p');       // second set of informetion you can add id attributes like p

            title.innerText = data.title;          // here we chage the contents using innnerText
            summary.innerText = data.summary;      // here we change the contents using innerText

          console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
        });
    });
}

document.addEventListener('DOMContentLoaded', init);