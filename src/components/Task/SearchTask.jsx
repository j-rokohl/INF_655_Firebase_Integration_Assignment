import React from "react";
import Card from "../shared/Card";

export default function SearchTask({ search, setSearch }) {
    return (
        <Card>
            <h2 className="search">Search Task From Your List</h2>
            <form onSubmit={(e) =>e.preventDefault()}>
                <input 
                id="search" 
                type="text"
                role="searchbox"
                placeholder="Search Task"
                className="input"
                onChange={(e => setSearch(e.target.value))}
                ></input>
            </form>
        </Card>
    );
}

