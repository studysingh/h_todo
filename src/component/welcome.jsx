import "./welcome.module.css";

let WelcomeMessage = ({ todoItem }) => {
  if (todoItem.length === 0) {
    return <h1> 😃 Enjoy your day 😃</h1>;
  }
};
export default WelcomeMessage;
