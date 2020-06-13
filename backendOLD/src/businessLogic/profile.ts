import * as uuid from 'uuid'

// import { ProfileItem } from '../models/AddImage'
import { ProfileItem } from '../models/ProfileItem'
import { ProfileAccess } from '../dataLayer/profileAccess'
import { CreateProfileRequest } from '../requests/CreateProfileRequest'
// import { UpdateTodoRequest } from '../requests/UpdateImageRequest'
import { getUserId } from '../lambda/utils'

// import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'

const profileAccess = new ProfileAccess()

// export async function getSignedUrl(event: APIGatewayProxyEvent): Promise<String> {
//     const todoId = event.pathParameters.todoId
//     const userId = getUserId(event)
//     return await todoAccess.getSignedUrl(todoId, userId)
// }


// export async function getAllImages(userId: string): Promise<TodoItem[]> {
//   return await profileAccess.getAllImages(userId)
// }

// export async function checkUserExists(event: APIGatewayProxyEvent): Promise<User> {
//     const userId = getUserId(event)
//     return await todoAccess.checkUserExists(userId)
// }

// export async function addUser(userId: string): Promise<User> {
//   return await todoAccess.addUser(userId)
// }

export async function createProfile(event: APIGatewayProxyEvent): Promise<ProfileItem> {
    const newProfile: CreateProfileRequest = JSON.parse(event.body)
    const dealerId = uuid.v4()
    const adminId = getUserId(event)

    return await profileAccess.createProfile({
        dealerId: dealerId,
        adminId: adminId,
        dealerName: newProfile.dealername,
        images: newProfile.images,
        createdAt: new Date().toISOString(),
    })
}

// export async function updateTodo(event: APIGatewayProxyEvent): Promise<UpdateTodoRequest> {
//     const updatedTodo: UpdateTodoRequest = JSON.parse(event.body)
//     const todoId = event.pathParameters.todoId
//     const userId = getUserId(event)

//     return await todoAccess.updateTodo(todoId, userId, updatedTodo)
// }

// export async function deleteTodo(event: APIGatewayProxyEvent){
//     let todoId = event.pathParameters.todoId
//     let userId = getUserId(event)
    
//     return await todoAccess.deleteTodo(todoId, userId)
// }

