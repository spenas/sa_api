export const coursesTypeDef = `
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

type ID_group{
    soid: String!
   }

type Group {
    id: ID_group!
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: [String]!
    status: String
    skill: [String]!
    members: [String]!
    director: String!
    leader: String!
    description: String
    project: [String]!
}



type Project {
    id: String!
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
    university: [String]!
    status: String
    skill: [String]!
    members: [String]!
    director: String!
    leader: String!
    description: String
    project: [String]!
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
    member: String!
    resources: Float
    publish: String
    Description: String
}`
;

export const coursesQueries = `
    allGroups: [Group]!
    groupByCode(code: String!): Group!
`;

export const coursesMutations = `
    createGroup(group: GroupInput!): Group!
    deleteGroup(code: String!): Int
    updateGroup(code: String!, group: GroupInput!): Group!
`;
