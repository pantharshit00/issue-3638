export const typeDefs = /* GraphQL */ `type AggregateParticipant {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum EnumDietaryRestriction {
  Diabetic
  GlutenFree
  HighProtein
}

scalar Long

type Mutation {
  createParticipant(data: ParticipantCreateInput!): Participant!
  updateParticipant(data: ParticipantUpdateInput!, where: ParticipantWhereUniqueInput!): Participant
  updateManyParticipants(data: ParticipantUpdateManyMutationInput!, where: ParticipantWhereInput): BatchPayload!
  upsertParticipant(where: ParticipantWhereUniqueInput!, create: ParticipantCreateInput!, update: ParticipantUpdateInput!): Participant!
  deleteParticipant(where: ParticipantWhereUniqueInput!): Participant
  deleteManyParticipants(where: ParticipantWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Participant {
  id: ID!
  User: User!
  dietaryRestrictions: [EnumDietaryRestriction!]!
}

type ParticipantConnection {
  pageInfo: PageInfo!
  edges: [ParticipantEdge]!
  aggregate: AggregateParticipant!
}

input ParticipantCreatedietaryRestrictionsInput {
  set: [EnumDietaryRestriction!]
}

input ParticipantCreateInput {
  id: ID!
  User: UserCreateOneWithoutParticipantInput!
  dietaryRestrictions: ParticipantCreatedietaryRestrictionsInput
}

input ParticipantCreateOneWithoutUserInput {
  create: ParticipantCreateWithoutUserInput
  connect: ParticipantWhereUniqueInput
}

input ParticipantCreateWithoutUserInput {
  id: ID!
  dietaryRestrictions: ParticipantCreatedietaryRestrictionsInput
}

type ParticipantEdge {
  node: Participant!
  cursor: String!
}

enum ParticipantOrderByInput {
  id_ASC
  id_DESC
}

type ParticipantPreviousValues {
  id: ID!
  dietaryRestrictions: [EnumDietaryRestriction!]!
}

type ParticipantSubscriptionPayload {
  mutation: MutationType!
  node: Participant
  updatedFields: [String!]
  previousValues: ParticipantPreviousValues
}

input ParticipantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParticipantWhereInput
  AND: [ParticipantSubscriptionWhereInput!]
  OR: [ParticipantSubscriptionWhereInput!]
  NOT: [ParticipantSubscriptionWhereInput!]
}

input ParticipantUpdatedietaryRestrictionsInput {
  set: [EnumDietaryRestriction!]
}

input ParticipantUpdateInput {
  id: ID
  User: UserUpdateOneRequiredWithoutParticipantInput
  dietaryRestrictions: ParticipantUpdatedietaryRestrictionsInput
}

input ParticipantUpdateManyMutationInput {
  id: ID
  dietaryRestrictions: ParticipantUpdatedietaryRestrictionsInput
}

input ParticipantUpdateOneWithoutUserInput {
  create: ParticipantCreateWithoutUserInput
  update: ParticipantUpdateWithoutUserDataInput
  upsert: ParticipantUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: ParticipantWhereUniqueInput
}

input ParticipantUpdateWithoutUserDataInput {
  id: ID
  dietaryRestrictions: ParticipantUpdatedietaryRestrictionsInput
}

input ParticipantUpsertWithoutUserInput {
  update: ParticipantUpdateWithoutUserDataInput!
  create: ParticipantCreateWithoutUserInput!
}

input ParticipantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [ParticipantWhereInput!]
  OR: [ParticipantWhereInput!]
  NOT: [ParticipantWhereInput!]
}

input ParticipantWhereUniqueInput {
  id: ID
}

type Query {
  participant(where: ParticipantWhereUniqueInput!): Participant
  participants(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Participant]!
  participantsConnection(where: ParticipantWhereInput, orderBy: ParticipantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParticipantConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  participant(where: ParticipantSubscriptionWhereInput): ParticipantSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String
  Participant: Participant
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID!
  name: String
  Participant: ParticipantCreateOneWithoutUserInput
}

input UserCreateOneWithoutParticipantInput {
  create: UserCreateWithoutParticipantInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutParticipantInput {
  id: ID!
  name: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  id: ID
  name: String
  Participant: ParticipantUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  id: ID
  name: String
}

input UserUpdateOneRequiredWithoutParticipantInput {
  create: UserCreateWithoutParticipantInput
  update: UserUpdateWithoutParticipantDataInput
  upsert: UserUpsertWithoutParticipantInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutParticipantDataInput {
  id: ID
  name: String
}

input UserUpsertWithoutParticipantInput {
  update: UserUpdateWithoutParticipantDataInput!
  create: UserCreateWithoutParticipantInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`