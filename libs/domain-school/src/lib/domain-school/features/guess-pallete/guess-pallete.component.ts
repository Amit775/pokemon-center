import { NgOptimizedImage } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
	selector: 'school-guess-pallete',
	templateUrl: './guess-pallete.component.html',
	imports: [NgOptimizedImage],
})
export class GuessPalleteComponent {
	number = signal(random(1, 152));
	image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.number()}.png`);
}
