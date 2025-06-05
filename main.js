$(document).ready(function () {

  $("#save-movie").on("click", function () {
    const title = $("#movie-title").val();
    const genre = $("#movie-genre").val();
    const impression = $("#movie-impression").val();

    if (!title) return;

    const movie = { title, genre, impression };
    const movieList = JSON.parse(localStorage.getItem("movies")) || [];
    movieList.push(movie);
    localStorage.setItem("movies", JSON.stringify(movieList));
    displayMovies();
  });


  $("#save-book").on("click", function () {
    const title = $("#book-title").val();
    const genre = $("#book-genre").val();
    const impression = $("#book-impression").val();

    if (!title) return;

    const book = { title, genre, impression };
    const bookList = JSON.parse(localStorage.getItem("books")) || [];
    bookList.push(book);
    localStorage.setItem("books", JSON.stringify(bookList));
    displayBooks();
  });


  function displayMovies() {
    const movieList = JSON.parse(localStorage.getItem("movies")) || [];
    $("#movie-list").empty();
    movieList.forEach(movie => {
      $("#movie-list").append(`
        <li>
          <strong>${movie.title}</strong>（${movie.genre}）<br>
          ${movie.impression}
        </li>
      `);
    });
  }


  function displayBooks() {
    const bookList = JSON.parse(localStorage.getItem("books")) || [];
    $("#book-list").empty();
    bookList.forEach(book => {
      $("#book-list").append(`
        <li>
          <strong>${book.title}</strong>（${book.genre}）<br>
          ${book.impression}
        </li>
      `);
    });
  }


  $("#movie-search").on("input", function () {
    const keyword = $(this).val().toLowerCase();
    const movieList = JSON.parse(localStorage.getItem("movies")) || [];
    const filtered = movieList.filter(movie =>
      String(movie.title).toLowerCase().includes(keyword) ||
      String(movie.genre).toLowerCase().includes(keyword) ||
      String(movie.impression).toLowerCase().includes(keyword)
    );

    $("#movie-search-result").empty();
    if (filtered.length === 0 && keyword) {
      $("#movie-search-result").append("<li>該当なし</li>");
    } else if (keyword) {
      filtered.forEach(movie => {
        $("#movie-search-result").append(`
          <li>
            <strong>${movie.title}</strong>（${movie.genre}）<br>
            ${movie.impression}
          </li>
        `);
      });
    }
  });


  $("#book-search").on("input", function () {
    const keyword = $(this).val().toLowerCase();
    const bookList = JSON.parse(localStorage.getItem("books")) || [];
    const filtered = bookList.filter(book =>
      String(book.title).toLowerCase().includes(keyword) ||
      String(book.genre).toLowerCase().includes(keyword) ||
      String(book.impression).toLowerCase().includes(keyword)
    );

    $("#book-search-result").empty();
    if (filtered.length === 0 && keyword) {
      $("#book-search-result").append("<li>該当なし</li>");
    } else if (keyword) {
      filtered.forEach(book => {
        $("#book-search-result").append(`
          <li>
            <strong>${book.title}</strong>（${book.genre}）<br>
            ${book.impression}
          </li>
        `);
      });
    }
  });

 
  displayMovies();
  displayBooks();
});
