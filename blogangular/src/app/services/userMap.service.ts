import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { User } from '../model/user';

@Injectable()
export class UserMapService {
    
    public mapIUserToUser(user : IUser) : User {
        return {
            id: user.id,    
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            phone: user.phone,
            website: user.website,
            company: user.company
        }
    }

    public mapUserToIUser(user : User) : IUser {
        return {
            id: user.id,    
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            phone: user.phone,
            website: user.website,
            company: user.company
        }
    }
}