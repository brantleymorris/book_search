import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import { List, ListItem } from "../List";

const BookCard = () => {

    const [books, setBooks] = useState(undefined);

    const getBooks = async () => {
        const response = await API.getBooks();
        console.log(response.data);
        setBooks(response.data);
    };

    const deleteBook = async (id) => {
        const removed = await API.deleteBook(id);
        console.log(removed);
        getBooks();
    };

    // think I need to add books to the array here so that it will reload when book is removed
    useEffect(() => {
        getBooks();
    }, []);

    return (

// TODO - add button to remove book
//      - add button to link to book site


        // <h1>Test</h1>

        books ? (
            books.map(result =>
                <ListItem key={result._id}>
                    <Container>
                        <Row>
                            { result.image ? (
                                <Col size="md-3">
                                    <img src={result.image} />
                                </Col> ) : (
                                <Col size="md-3">
                                    <p>No image found.</p>
                                </Col>
                            )
                            }
                            <Col size="md-9">
                                <Container>
                                    <Row>
                                        <strong>
                                            {result.title} by {result.author}
                                        </strong>
                                    </Row>
                                    {result.description ? (
                                        <Row>
                                            {result.description.substring(0,250) /*only load 250 characters*/} 
                                        </Row>
                                        ) : (
                                        <Row>
                                            No description available.    
                                        </Row>
                                    )}
                                    {result.link ? (
                                        <Row>
                                            <a href={result.link}>
                                                <button className="btn">
                                                    View
                                                </button>
                                            </a>
                                            <button className="btn" onClick={() => {deleteBook(result._id)}}>
                                                Remove
                                            </button> 
                                        </Row>) : (
                                        <Row>
                                            <p>No link found.</p>
                                        </Row>
                                        )}
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </ListItem>
            )
        ) : (
            <h3>No books have been saved.</h3>
        ) 
    );
};

export default BookCard;