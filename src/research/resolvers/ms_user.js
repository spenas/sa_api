import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'USER'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}`;

const resolvers = {
  Query: {
    userByCode(_, { code }) {

      return generalRequest(`${url}/api/users/${code}`, 'GET');
    },
    me(_, { token }) { 
      return generalRequestHead(`${url}/api/users/me`, 'GET', token);
    },
    allUsers(_) {
      return generalRequest(`${url}/api/users/all`, 'GET');
    }
  },

  Mutation: {
    createUser(_, { user }) {
      return generalRequest(`${url}/api/users`, 'POST', user);
    },
    login (_, {data}){
      return generalRequest(`${url}/api/auth`,'POST', data);
    }
  }
}

export default resolvers;
  