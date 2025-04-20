import React, { useState } from "react";
 
export default function SearchTask({ search, setSearch }) {

    return (
            <form onSubmit={(e) =>e.preventDefault()}>
                <input 
                id="search" 
                type="text"
                role="searchbox"
                placeholder="Search Tasks"
                className="input"
                onChange={(e => setSearch(e.target.value))}
                ></input>
            </form>
    );
}
