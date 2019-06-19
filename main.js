
fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    const dataRefactored = data.radios;
    console.log(dataRefactored);

    const list = document.querySelector("#stations");
    dataRefactored.forEach((data) => {
      console.log(data.name);
      // Adding all the radios to th ul
      list.insertAdjacentHTML('beforeend', `
        <li class="radio">
          <p class="alignleft">${data.name}</p>
          <p class="alignright">${data.frequency}</p>
          <hr class="length">

        </li>
        `);
    });
});
