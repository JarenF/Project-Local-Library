function findAuthorById(authors, id) {
  //looks for the author in the authors array that matches the provided id
  return authors.find((author)=> author.id === id);
}

function findBookById(books, id) {
  //looks for the book in the books array that matches the provided id
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //creates two arrays, one for books that have been returned and one for those that haven't
  //returns an array containing the created arrays
  const arr1 = books.filter((book)=> book.borrows[0].returned === false);
  const arr2 = books.filter((book)=> book.borrows[0].returned === true)
  return [arr1, arr2];
}
function getBorrowersForBook(book, accounts) {
  // get all the borrowers with associated id book.filter
  // map to get all account ids
  const { borrows } = book // destructure to get borrows array
  // remove duplicate borrowers
    const borrowers =  borrows.map((borrow, idx) => { 
    // find the account associated with the id
      const {returned} = borrow
      const accountInfo = accounts.find(account => borrow.id === account.id)
      return {...accountInfo, returned}  
     })
    // pop the last item until a length of 10
  while(borrowers.length >10) {
    borrowers.pop()
  }
  return borrowers
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
