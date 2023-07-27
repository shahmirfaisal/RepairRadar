import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly Sender?: User | null;
  readonly Chat?: Chat | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageSenderId?: string | null;
  readonly messageChatId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly Sender: AsyncItem<User | undefined>;
  readonly Chat: AsyncItem<Chat | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageSenderId?: string | null;
  readonly messageChatId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer?: User | null;
  readonly Mechanic?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatCustomerId?: string | null;
  readonly chatMechanicId?: string | null;
}

type LazyChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: AsyncItem<User | undefined>;
  readonly Mechanic: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatCustomerId?: string | null;
  readonly chatMechanicId?: string | null;
}

export declare type Chat = LazyLoading extends LazyLoadingDisabled ? EagerChat : LazyChat

export declare const Chat: (new (init: ModelInit<Chat>) => Chat) & {
  copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer?: User | null;
  readonly Mechanic?: User | null;
  readonly rating: number;
  readonly text: string;
  readonly Appointment?: Appointment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewCustomerId?: string | null;
  readonly reviewMechanicId?: string | null;
  readonly reviewAppointmentId?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: AsyncItem<User | undefined>;
  readonly Mechanic: AsyncItem<User | undefined>;
  readonly rating: number;
  readonly text: string;
  readonly Appointment: AsyncItem<Appointment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewCustomerId?: string | null;
  readonly reviewMechanicId?: string | null;
  readonly reviewAppointmentId?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer?: User | null;
  readonly Mechanic?: User | null;
  readonly time: string;
  readonly status: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentCustomerId?: string | null;
  readonly appointmentMechanicId?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: AsyncItem<User | undefined>;
  readonly Mechanic: AsyncItem<User | undefined>;
  readonly time: string;
  readonly status: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentCustomerId?: string | null;
  readonly appointmentMechanicId?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly email: string;
  readonly type: string;
  readonly picture?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly name: string;
  readonly email: string;
  readonly type: string;
  readonly picture?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}