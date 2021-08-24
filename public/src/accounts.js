function findAccountById(accounts, id) {
  return accounts.find(acc => acc.id === id)
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((acctA, acctB) => acctA['name'].last.toLowerCase() < acctB['name'].last.toLowerCase() ? -1 : 1)
}


function getTotalNumberOfBorrows(account, books) {
  // loop through books and map to get borrows only for each book
  const allBorrows = books.map(book => book.borrows).flat()
  const allBorrowsByAcct = allBorrows.filter(borrow => borrow.id === account.id)
  return allBorrowsByAcct.length
//   const allBorrows = books.map(book => book.borrows).flat()
//   const allBorrowsByAcct = allBorrows.filter(borrow => borrow.id === account.id)
//   return allBorrowsByAcct.length
  // returns a number that represents the number of times the acct ID appeears in any borrows array
  const { id } = account
  const allBorrowsLog = books.map(book => book.borrows).flat()
const totalBorrowsByAcct =  allBorrowsLog.reduce((acc, borrow) => ((borrow.id === id) ? acc + 1 : acc),0 )
  return totalBorrowsByAcct}
  

  function getBooksPossessedByAccount(account, books, authors) {
  // filter through book while keeping book obj and authorId
    // get the borrowed books based on acct.id
    const allBorrowedBooksByAcct = books.filter(book => (!book.borrows[0].returned && book.borrows[0].id === account.id))
    return allBorrowedBooksByAcct.map(book => {
      // returns the first matching author object found
      const author = authors.find(author => author.id === book.authorId)
      return {...book, author, }
    })
}
  

module.exports = {
findAccountById,
sortAccountsByLastName,
getTotalNumberOfBorrows,
getBooksPossessedByAccount,
};
