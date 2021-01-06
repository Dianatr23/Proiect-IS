//conexiunea cu server-ul aplicatiei
import axios from 'axios';

////////////////////////////////////////////////////////////////////////USER////////////////////////////////////////////////////////////////////////

//search for book by title
//done
export const search = (title) =>{
        const response = `http://localhost:59427/api/book/search/title/${title}`
        return axios.get(response)
}

//get read books of an user
//done
export const getReadBooks = (idUser) =>{
        const response = `http://localhost:59427/api/user/readBooks/${idUser}`
        return axios.get(response)
}

//get active books of an user
//done
export const getActiveBooks = (idUser) =>{
        const response = `http://localhost:59427/api/user/activeBooks/${idUser}`
        return axios.get(response)
}

//get wishlist of an user
//done
export const getWishList = (idUser) =>{
        const response = `http://localhost:59427/api/user/wishList/${idUser}`
        return axios.get(response)
}

//add rating to a book
//done
export const addRating = (idUser, idBook, rating) =>{
        const response = `http://localhost:59427/api/user/rating/${idUser}/${idBook}/${rating}`
        return axios.put(response)
}

//add a book to active books
//done 
export const addBookToActiveBooks = (idUser, idBook) =>{
        const response = `http://localhost:59427/api/user/activeBook/${idUser}/${idBook}`
        console.log(response)
        return axios.put(response)
}

//add a book to read books 
//done
export const addBookToReadBooks = (idUser, idBook) =>{
        const response = `http://localhost:59427/api/user/readBook/${idUser}/${idBook}`
        return axios.put(response)
}

//add a book to wishlist
//done
export const addBookToWishList = (idUser, idBook) =>{
        const response = `http://localhost:59427/api/user/wishList/${idUser}/${idBook}`
        return axios.put(response)
}

//delete book from active books
//done
export const deleteBookFromActiveBooks = (idUser, idBook) =>{
        const response = `http://localhost:59427/api/user/deleteActiveBook/${idUser}/${idBook}`
        return axios.delete(response)
}

//delete book from wishlist
//done
export const deleteBookFromWishList = (idUser, idBook) =>{
        const response = `http://localhost:59427/api/user/deleteWishListBook/${idUser}/${idBook}`
        return axios.delete(response)
}


//get recommandation names
//done
export const getRecommandationNames = (idUser) =>{
        const response = `http://localhost:59427/api/book/rec/names/${idUser}`
        return axios.get(response)
}


//get book by id
//done
export const getBook = (id) =>{
        const response = `http://localhost:59427/api/book/id/${id}`
        return axios.get(response)
}

/////////////////////////////////////////////////////////////////USER+ADMIN////////////////////////////////////////////////////////////////////////

//get all books
//done
export const getAllBooks = () =>{
        const response = 'http://localhost:59427/api/book'
        return axios.get(response)
}

/////////////////////////////////////////////////////////////////////LOGIN//////////////////////////////////////////////////////////////////////////

//get id of an user by username
//done
export const getUserId = (username) =>{
        const response = `http://localhost:59427/api/user/${username}`
        return axios.get(response)
}

//verify the user 
//0 - pentru user
//1 - pentru admin
//-1 - cont inexistent
//done
export const logIn = (username, password) =>{
        const response = `http://localhost:59427/api/user/verify/${username}/${password}`
        return axios.get(response)
}

//////////////////////////////////////////////////////////////////////ADMIN////////////////////////////////////////////////////////////////////////

//add book
//done 
export const addBook = (title, author, year, pubHouse, description) =>{
        const response = `http://localhost:59427/api/book/add/${title}/${author}/${year}/${pubHouse}/${description}`
        return axios.post(response)
}

//add user
//done
export const addUser = (isAdmin, username, password) =>{
        const response = `http://localhost:59427/api/user/add/${isAdmin}/${username}/${password}`
        return axios.post(response)
}

//delete book
//done
export const deleteBook = (idBook) =>{
        const response = `http://localhost:59427/api/book/delete/${idBook}`
        return axios.delete(response)
}

//delete user
//done
export const deleteUser = (idUser) =>{
        const response = `http://localhost:59427/api/user/delete/${idUser}`
        return axios.delete(response)
}


//delete comment
//done
export const deleteComment = (idComment) =>{
        const response = `http://localhost:59427/api/comment/delete/${idComment}`
        return axios.delete(response)
}

//update the title of a book
//done
export const updateTitle = (id, title) =>{
        const response = `http://localhost:59427/api/book/updateTitle/${id}/${title}`
        return axios.put(response)
}

//update the author of a book
//done
export const updateAuthor = (id, author) =>{
        const response = `http://localhost:59427/api/book/updateAuthor/${id}/${author}`
        return axios.put(response)
}

//update the year of a book.
//done
export const updateYear = (id, year) =>{
        const response = `http://localhost:59427/api/book/updateYear/${id}/${year}`
        return axios.put(response)
}

//update the publishing house of a book
//done
export const updatePubHouse = (id, pubHouse) =>{
        const response = `http://localhost:59427/api/book/updatePH/${id}/${pubHouse}`
        return axios.put(response)
}

//get all comments
//done
export const getAllComments = () =>{
        const response = 'http://localhost:59427/api/comment'
        return axios.get(response)
}

//get all users
//done
export const getAllUsers = () =>{
        const response = 'http://localhost:59427/api/user'
        return axios.get(response)
}