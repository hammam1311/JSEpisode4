/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  // Your code goes here
var bookindex
let temp = books.map(function(item,index,array){
if (item.id == bookId)
{
  bookindex =index
  return item;
}
})
return books[bookindex]

}

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  // Your code goes here
  var authindex;
  let temp = authors.map(function(item,index,array){
    if (item.name.toLowerCase() == authorName.toLowerCase())
    {
      authindex =index
      return item;
    }
    })
    return authors[authindex]
}

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  // Your code goes here
  let soso = [];
  let obob = {
    author:"",
    bookCount:0
  }
  let temp = authors.map(function(item,index,array){
    
      obob.author = item.name;
      obob.bookCount = item.books.length;
      soso.push(obob)
       obob = {
        author:"",
        bookCount:0
      
      }
      return 0
    }
    )
    return soso;
}

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  const colors = {};
  let bookt = []
  books.forEach(element => {
  if (!colors[element.color])
  {
    bookt.push(element.title)
    colors[element.color]=bookt;
    bookt=[]
  }
  else
  {
    colors[element.color].push(element.title)
  }
  }
  )

  // Your code goes here

  return colors;
}

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  let booksList =[]
  let booksId=[]
  authors.forEach(element => {
    if (element.name.toLowerCase() == authorName.toLowerCase()){
      element.books.forEach(book => {
        booksId.push(book)
      });
    }  
  });
  books.forEach(id1 => 
    {
      booksId.forEach(id2 =>
         {
        if (id1.id == id2)
        {
          booksList.push(id1.title)
        }
      });
  });
  return booksList
}

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
let theTop ;
let bestNowName = 0 ;
let bestNowNum = 0;
authors.forEach(x => {
  if (x.books.length>bestNowNum)
  {
    bestNowName = x.name
    bestNowNum = x.books.length
  }
  
});
return bestNowName
}

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  let theAuthor = [];
  let bookList=[];
  books.forEach(book => {
    if (book.id==bookId){
      book.authors.forEach(auth => {
        theAuthor.push(auth.name) 
      });
    }
  });
  books.forEach(book => {
    theAuthor.forEach(name => {
      book.authors.forEach(author => {
        if (author.name == name){
          bookList.push(book.title)
        }
      });
      
    });    
  });
  return bookList

}

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
let dAuthors = [];
let counter = 0 ;
  authors.forEach(author1 => {
    authors.forEach(author2 => {
      author1.books.forEach(book1 => {
        author2.books.forEach(book2 => {
          if(book1==book2){
            dAuthors.push(author2.name)
          }





        });
      });
    });
    
  });
  let x = 0 ;
  let y = 0;
  let me = 0;
  let temp ;
  
  dAuthors.forEach(a1 => {
    me = 0
    dAuthors.forEach(a2 => {
      if (a2 == a1)
      {
        if (me == 0)
        {
          me++;
        }
        else 
        {
          x++
        }
      }
    });
  if (x > y)
  {

    y = x
    temp = a1
    x = 0
  }
});
return temp 
}

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */

// const authors = require("./authors.json");
// const books = require("./books.json");

// console.log(getBookById(12, books));
// console.log(getAuthorByName("J.K. Rowling", authors));
// console.log(bookCountsByAuthor(authors));
// console.log(booksByColor(books));
// console.log(titlesByAuthorName("George R.R. Martin", authors, books));
// console.log(mostProlificAuthor(authors));
// console.log(relatedBooks(50, authors, books));
// console.log(friendliestAuthor(authors));
