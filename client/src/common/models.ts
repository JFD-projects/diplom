export type RoomItemType = {
  _id: string;
  title: string;
  description: string;
  quality: string;
  photoUrl: string | null;
  roomNumber: number;
  reserved: string | null;
};

export type UserType = {
  email: string;
  password: string;
};

export type MessageType = {
  title: string;
  message: string;
};

export type AuthFormType = {
  title: string;
  onFinish(data: UserType): void;
  onFinishFailed(errorInfo: any): void;
  submitBtnText: string;
};

export type DefaultStateType = {
  loading: boolean;
  error: string;
};

export type DefaultStateRoomsType = DefaultStateType & {
  rooms: [] | RoomItemType[];
};

export type DefaultStateRoomType = DefaultStateType & {
  room: {} | RoomItemType;
};

export type DefaultStateAuthType = DefaultStateType & {
  auth: boolean;
};

export type GetApiRoomsType = { rooms: RoomItemType[]; codeStatus: number };

export type ValuesType = Omit<RoomItemType, "_id" | "roomNumber" | "reserved">;

export type ResponseType = {
  codeStatus: number;
  message: string;
};

export type GetApiRoomByIdType = ResponseType & {
  roomId: string;
};

export type GetApiRoomType = ResponseType & {
  room: RoomItemType;
};

export type RoomFormType = {
  title: string;
  description: string;
  quality: string;
  photoUrl: string | null;
};
