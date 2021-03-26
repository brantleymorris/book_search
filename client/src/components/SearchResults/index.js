import React from "react";
import { useStateContext } from "../../utils/GlobalState";
import { Container, Row, Col } from "../Grid";
import { List, ListItem } from "../List";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    // this needs to be wrapped in a map
    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <img />
                </Col>
                <Col size="md-8">
                    <h1>
                        Title, pass in
                    </h1>
                    <h3>
                        Author
                    </h3>
                    <p>
                        Body
                    </p>
                </Col>
            </Row>
        </Container>

        // double check all of the object keys to make sure they are right
        // <div>
        //     {state.searchResults.length ? (
        //         <List>
        //             {state.searchResults.map(result => {
        //                 <ListItem key={result.id}>
        //                     <Container>
        //                         <Row>
        //                             <Col size="md-3">
        //                                 {result.image}
        //                             </Col>
        //                             <Col size="md-9">
        //                                 <Container>
        //                                     <Row>
        //                                         <strong>
        //                                             {result.title} by {result.author}
        //                                         </strong>
        //                                     </Row>
        //                                     <Row>
        //                                         {result.body}
        //                                     </Row>
        //                                 </Container>
        //                             </Col>
        //                         </Row>
        //                     </Container>
        //                 </ListItem>
        //             })}

        //         </List>
        //     ) : (
        //         <h3>Search for a book to see results.</h3>
        //     )}
        // </div>
    );
};

export default SearchResults;