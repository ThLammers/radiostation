
fetch("https://teclead.de/recruiting/radios")
  .then(response => response.json())
  .then((data) => {
    const dataRefactored = data.radios;

    const list = document.querySelector("#stations");
    dataRefactored.forEach((data) => {
      console.log(data.name);
      // Adding all the radios to th ul
      list.insertAdjacentHTML('beforeend', `
        <ol class="radio">
          <p class="alignleft">${data.name}</p>
          <p class="alignright">${data.frequency}</p>
          <hr class="length">
          <div class="detail_screen hide">
            <i class="fas fa-minus"></i>
            <img class="img-circle" src="https://dummyimage.com/400x400/3d43ff/ffffff&text=Radio" alt="Radio">
            <i class="fas fa-plus"></i>
          </div>
        </ol>
        `);


    });
})
  .then(() => {
    //getting all the radio stations from DOM
    const radios = document.querySelectorAll(".radio");
      radios.forEach((radio) => {
        //created a click listener on every radio object
        radio.addEventListener('click', (event) => {

          //selected the right detailed class
          const footer = document.querySelector('.footer');
          footer.innerText = event.path[1].children[0].innerText
          const detail = event.path[1].children[3].classList
          //if statment to add toggle to class
          if (!detail.contains('.hide'))  {
            detail.toggle('hide')
          }
          event.preventDefault();
        });
      });
  });

