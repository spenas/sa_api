import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'GROUP'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}/groups`;
const url2 = `http://${baseurl}:3001`;

const resolvers = {
    Query: {
      allGroups(_) {
        return getRequest(url, '');
      },
      groupByCode(_, { code }) {
        return generalRequest(`${url}/${code}`, 'GET');
      }
    },
  
    Mutation: {
        async createGroup (_, { group, token }) 
		{
      console.log("=====currentusr");
      let current_usr = await generalRequestHead(`${url2}/api/users/me`,'GET',token);
      console.log(current_usr)
			group.leader = current_usr._id;
			return generalRequest(`${url}`, 'POST', group);
		},
        updateGroup (_, { code, group }) 
        {
      let id = await generalRequest(`${url2}/api/users/me`, 'GET');
      let cur_group = await generalRequest(`${url}/${code}`, 'GET');
      if (id == cur_group.leader){
        return generalRequest(`${url}/${code}`, 'PUT', group);
      }
			
        },
		async deleteGroup(_, { code, id })
		{
			let return_e = await generalRequest(`${url}/${code}`, 'GET');
			return generalRequestDelete(`${url}/${code}`, 'DELETE', id, return_e);
		}
    }
  }
  


export default resolvers;