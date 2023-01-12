// import * as signalR from "@microsoft/signalr";

const URL = "" //backend port "https://localhost:5001/hub";
const Connector = () => {
    // connection: signalR.HubConnection;
    // public events: (onMessageReceived: (username: string, message: string) => void) => void;
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(URL)
        .withAutomaticReconnect()
        .build();
    connection.start().catch(err => document.write(err));
    this.events = (onMessageReceived) => {
        this.connection.on("messageReceived", (username, message) => {
            onMessageReceived(username, message);
        });
    };
    const newMessage = (messages) => {
        this.connection.send("newMessage", "foo", messages).then(x => console.log("sent"))
    }
    // const getInstance(): Connector {
    //     if (!Connector.instance)
    //         Connector.instance = new Connector();
    //     return Connector.instance;
    // }
}
export default Connector