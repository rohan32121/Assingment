// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.



function filterAndCapitalizeBooks(books) {
    
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);
  
   
    const capitalizedBooks = filteredBooks.map(book => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
        publicationYear: book.publicationYear
      };
    });
  
    return capitalizedBooks;
  }
  
  
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
      publicationYear: 2008
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      publicationYear: 2011
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      publicationYear: 2014
    }
  ];
  
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  console.log(filteredAndCapitalizedBooks);
  