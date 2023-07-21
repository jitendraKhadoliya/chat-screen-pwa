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
