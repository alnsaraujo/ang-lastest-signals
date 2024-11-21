import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserSchema } from './domain/entitties/user.entity';
import { UserService } from './infrastructure/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name$ = signal<string>('');

  constructor(private userService: UserService) { }

  nameChangeEffect = effect(() => {
    console.log('nameChangeEffect', this.name$());
  });

  users$ = computed(() => this.userService.getUsers());

  addUser() {
    this.userService.addUser(new User(this.users$().length + 1, this.name$()))
    this.name$.set('')
  }

  changeUserName(event: Event) {
    const name = (event.target as HTMLInputElement).value;

    this.name$.set(name);
  }
}
