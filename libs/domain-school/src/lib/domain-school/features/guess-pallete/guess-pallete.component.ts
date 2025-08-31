import { NgOptimizedImage } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import Vibrant from 'node-vibrant';
import { from } from 'rxjs';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
	selector: 'school-guess-pallete',
	templateUrl: './guess-pallete.component.html',
	imports: [NgOptimizedImage],
})
export class GuessPalleteComponent {
	number = signal(random(1, 152));
	image = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.number()}.png`);
	colors = toSignal(from(Vibrant.from(this.image()).getPalette()));

	r = computed(() => toSignal(from((() => this.getCommonColors(this.image()))())));

	async getCommonColors(imageUrl: string) {
		try {
			const palette = await Vibrant.from(imageUrl).build().getPalette();
			const colors = Object.values(palette)
				.filter((color) => color !== null)
				.sort((a, b) => b.population - a.population)
				.slice(0, 3)
				.map((color) => ({
					hex: color.getHex(),
					percentage: (color.population / palette.Vibrant!.population) * 100,
				}));
			return colors;
		} catch (error) {
			console.error('Error extracting colors:', error);
			return [];
		}
	}
}
