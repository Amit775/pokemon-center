import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TypeMatchupsDocument, gqlResource } from '@pokemon-center/data-access-pokedex';

@Component({
	standalone: true,
	selector: 'pokedex-type-page',
	template: `
		@if (type(); as type) {
			<h2>{{ type.identifier }}</h2>
			<section>
				<h3>Offense ({{ type.identifier }} attacks …)</h3>
				<div class="row">
					<span class="label">2×</span>
					@for (eff of offense(200); track eff.targetType.id) {
						<span class="chip">{{ eff.targetType.identifier }}</span>
					}
				</div>
				<div class="row">
					<span class="label">½×</span>
					@for (eff of offense(50); track eff.targetType.id) {
						<span class="chip">{{ eff.targetType.identifier }}</span>
					}
				</div>
				<div class="row">
					<span class="label">0×</span>
					@for (eff of offense(0); track eff.targetType.id) {
						<span class="chip">{{ eff.targetType.identifier }}</span>
					}
				</div>
			</section>
			<section>
				<h3>Defense (… attacks {{ type.identifier }})</h3>
				<div class="row">
					<span class="label">2×</span>
					@for (eff of defense(200); track eff.damageType.id) {
						<span class="chip">{{ eff.damageType.identifier }}</span>
					}
				</div>
				<div class="row">
					<span class="label">½×</span>
					@for (eff of defense(50); track eff.damageType.id) {
						<span class="chip">{{ eff.damageType.identifier }}</span>
					}
				</div>
				<div class="row">
					<span class="label">0×</span>
					@for (eff of defense(0); track eff.damageType.id) {
						<span class="chip">{{ eff.damageType.identifier }}</span>
					}
				</div>
			</section>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: 1rem;
		}
		h2,
		h3 {
			text-transform: capitalize;
		}
		.row {
			display: flex;
			align-items: baseline;
			gap: 0.4rem;
			margin: 0.3rem 0;
			flex-wrap: wrap;
		}
		.label {
			width: 2.5rem;
			opacity: 0.65;
		}
		.chip {
			border: 1px solid currentColor;
			border-radius: 999px;
			padding: 0 0.6rem;
			text-transform: capitalize;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypePageComponent {
	public id = input.required<string>();

	private readonly detail = gqlResource(TypeMatchupsDocument, () => ({ idOrSlug: this.id() }));

	public type = computed(() => this.detail.value()?.type);

	protected offense(factor: number) {
		return (this.type()?.efficacy ?? []).filter((e) => e.damage_factor === factor);
	}

	protected defense(factor: number) {
		return (this.type()?.efficacyTarget ?? []).filter((e) => e.damage_factor === factor);
	}
}
