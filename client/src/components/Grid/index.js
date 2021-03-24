import React from "react";

// this allows the user to specify if they want the container to be fluid or not
// container-fluid or container
export const Container = ({fluid, children}) => {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
};

// this allows the user to specify if they want the row to be fluid or not
// row-fluid or row
export const Row = ({fluid, children}) => {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
};

// requires that a bootstrap size is entered when used
// <Col size="md-6">
export const Col = ({size, children}) => {
    return(
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    );
};