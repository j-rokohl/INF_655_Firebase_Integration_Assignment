
import React from "react";

const int = Math.floor(Math.random() * 4);
class UserInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items : [
            {
                name: "Jane Hernandez",
                prof: "secretary",
            },
            {
                name: "Jordan Brown",
                prof: "teacher",
            },
            {
                name: "Eliza Sullivan",
                prof: "nurse",
            },
            {
                name: "Jose Garcia",
                prof: "firefighter",
            }
        ]
      };
    } 
    
    render() {
        return(
            <div>
                <h1 className="h1-sm">Hello, {this.state.items[int].name}! You are a great {this.state.items[int].prof}!</h1> 
                <p><strong>Your lucky number is:</strong> {Math.floor(Math.random() * 10)}.</p>
            </div>
        )
    }
};

export default UserInfo;