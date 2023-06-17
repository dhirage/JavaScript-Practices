
document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
  
    // Delete movies
    list.addEventListener('click', (e) => {
      if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        // li.remove();
      }
    });
  
    // Add movies

    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();

    //creating elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const movieName=document.createElement('span');
    const deleteBtn=document.createElement('span');



    //add text content

    movieName.textContent=value;
    deleteBtn.textContent='delete';


    //add classes

    movieName.classList.add('name');
    deleteBtn.classList.add('delete');


    //appended to DOm
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    })

});
    

    // const addMovieForm = forms['add-movie'];
    // addMovieForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   const input = this.querySelector('input[type="text"]');
    //   const movieName = input.value;
  
    //   if (movieName.trim() !== '') {
    //     const newMovie = createMovieElement(movieName);
    //     list.appendChild(newMovie);
    //     input.value = '';
    //   }
    // });
  
    // function createMovieElement(movieName) {
    //   const li = document.createElement('li');
    //   const nameSpan = document.createElement('span');
    //   const deleteSpan = document.createElement('span');
  
    //   nameSpan.textContent = movieName;
    //   deleteSpan.textContent = 'delete';
  
    //   nameSpan.classList.add('name');
    //   deleteSpan.classList.add('delete');
  
    //   li.appendChild(nameSpan);
    //   li.appendChild(deleteSpan);
  
    //   return li;
    // }

  