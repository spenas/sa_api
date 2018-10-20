export const coursesTypeDef = `
type Group {
    id: String!
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: String!
    status: String
    skill: [String]!
    members: [User]!
    director: User!
    leader: User!
    description: String
    project: [Project]!
}

type User {
    id: String!
    name: String!
    lastname: String!
    password: String!
    email: String!
    study_ar: [String]
    organization: String
    nationality: String
    gender: String
    languages: [String]
    skills: [String]
}


type Project {
    id: Int!
    planning: [Planning]!
    status: String
    members: [User]!
    leader: User!
    title: String
    fields: [Int]!
    description: String
}


type Planning{
    id: Int!
    month_s: Int!
    day_s: Int!
    month_e: Int!
    day_e: Int!
    member: User!
    resources: Float
    publish: String
    Description: String
}

input UserInput {
    name: String!
    lastname: String!
    password: String!
    email: String!
    study_ar: [String]
    organization: String
    nationality: String
    gender: String
    languages: [String]
    skills: [String]
}


input GroupInput {
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: String!
    status: String
    skill: [String]!
    members: [String]!
    director: String!
    leader: String!
    description: String
    project: [Int]!
}

input ProjectInput {
    planning: [Int]!
    status: String
    members: [String]!
    leader: String!
    title: String
    fields: [Int]!
    description: String
}


input PlanningInput {
    month_s: Int!
    day_s: Int!
    month_e: Int!
    day_e: Int!
    member: User!
    resources: Float
    publish: String
    Description: String
}`
;

export const coursesQueries = `
    allGroup: [Group]!
    groupByCode(code: Int!): Group!
`;

export const coursesMutations = `
    createGroup(group: GroupInput!): Group!
    deleteGroup(code: String!): Int
    updateGroup(code: String!, group: GroupInput!): Group!
`;
