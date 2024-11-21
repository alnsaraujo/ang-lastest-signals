import { Injectable, signal } from '@angular/core';
import { User } from '../../domain/entitties/user.entity';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private users$ = signal<User[]>([]);

    addUser(user: User) {
        this.users$.update(currUsers => [...currUsers, user])
    }

    getUsers() {
        return this.users$();
    }
}