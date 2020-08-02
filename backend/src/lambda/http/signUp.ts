import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
// import { checkDealerExists, addAdmin } from '../../businessLogic/profile'

// import uuid from 'uuid'


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log(event)
  try {
    // // check to see if user exists in Users table
    // let profile = await checkDealerExists(event)
    //if we have a user return
    // if(profile) {

    // } else {
    //   let adminId = uuid.v4()
    //   //add user to ProfileTable
    //   let user = await addAdmin(adminId)
    //   console.log(user);
      
    // }
    // let todos = []

    // // if so, get any todos they have
    // if (theUser.count !== 0) {
    //   todos = await getAllTodos(theUser.id)
    // } else {
    //   //add User to Users Table
    //   await addUser(theUser.id)
    // }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
    //   body: JSON.stringify({items: todos})
        body: JSON.stringify({items: 'Hello lets sign up'})
    }
   
  } catch (e) {
      console.log("ERROR in getTodos", e);
      
      return {
        statusCode: 502,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({error: `${e}`})
      }
      
  }
}


