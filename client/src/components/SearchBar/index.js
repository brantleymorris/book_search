import React, { useRef } from "react";
import { useStateContext } from "../../utils/GlobalState";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";

const Search = () => {

    const titleRef = useRef();

    const [state, dispatch] = useStateContext();

    const handleClick = async (e) => {
        e.preventDefault();

        const response = await API.googleSearch(titleRef.current.value);

        console.log(response.data);

        dispatch({
            type: "search",
            post: response.data
        });

        titleRef.current.value = "";
    };

    return (
        <Container>
            <Row>
                <div className="input-group">
                    <Col size="md-8">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" ref={titleRef}/>
                        </div>
                    </Col>
                    <Col size="md-4">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>
                            <i className="fas fa-search">Search</i>
                        </button>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default Search;