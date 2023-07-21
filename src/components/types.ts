// export interface ChatMessage {
//   id: string;
//   message: string;
//   timestamp: string;
//   sender: string;
// }

// export interface ChatMessage {
//   id: string;
//   message: string;
//   timestamp: string;
//   from: string;
//   to: string;
//   name: string;
// }

// export interface ChatMessage {
//   id: string;
//   message: string;
//   timestamp: string;
//   tripData: string; // Replace 'string' with the correct type for trip data
//   from: string;
//   to: string;
//   time: string; // Replace 'string' with the correct type for time
//   date: string; // Replace 'string' with the correct type for date
// }

// // export type ChatData = [Array<any>, string, string, string, string, string];

// export type ChatData = {
//   id: number;
//   message: string;
//   sender: string;
//   time: string;
// };

// types.ts
export interface ChatMessage {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

export interface ChatData {
  chats: ChatMessage[];
  from: string;
  message: string;
  name: string; // Add the 'name' property to the ChatData type
  status: string;
  to: string;
}
