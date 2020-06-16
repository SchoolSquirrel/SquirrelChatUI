import { Component } from "@angular/core";
import { Message, MessageStatus } from "squirrel-chat-ui";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private user1 = { id: 1, name: "Güther" };
  private user2 = { id: 2, name: "Tom" };
  public messages: Message[] = [
      {
          id: 0,
          fromMe: false,
          text: "Hallo!",
          sender: this.user1,
          date: new Date("2020-06-15 13:57"),
      },
      {
          id: 1,
          fromMe: true,
          text: "Hallo!",
          sender: this.user2,
          date: new Date("2020-06-15 13:58"),
      },
      {
          id: 2,
          fromMe: false,
          text: "Wie geht's?",
          sender: this.user1,
          date: new Date("2020-06-15 13:59"),
      },
      {
          id: 3,
          fromMe: false,
          text: "Hallo",
          sender: this.user1,
          date: new Date("2020-06-16 08:26"),
      },
      {
          id: 4,
          fromMe: false,
          text: "...",
          sender: this.user1,
          date: new Date("2020-06-16 08:34"),
      },
      {
          id: 5,
          fromMe: true,
          text: "Gut",
          sender: this.user2,
          date: new Date("2020-06-16 10:05"),
      },
      {
          id: 6,
          fromMe: false,
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          sender: this.user1,
          date: new Date("2020-06-16 10:50"),
      },
      {
          id: 7,
          fromMe: true,
          text: "Seen",
          sender: this.user2,
          status: MessageStatus.Seen,
          date: new Date("2020-06-16 10:55"),
      },
      {
          id: 8,
          fromMe: true,
          text: "Delivered",
          sender: this.user2,
          status: MessageStatus.Delivered,
          date: new Date("2020-06-16 10:55"),
      },
      {
          id: 9,
          fromMe: true,
          text: "Sent",
          sender: this.user2,
          status: MessageStatus.Sent,
          date: new Date("2020-06-16 10:55"),
      },
      {
          id: 10,
          fromMe: true,
          text: "Waiting. Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines?",
          sender: this.user2,
          status: MessageStatus.Waiting,
          date: new Date("2020-06-16 10:59"),
      },
  ];
}
