/** Only what the moves table renders, so the generated query type is not a dependency. */
export interface DetailMove {
	id: number;
	name: string;
	type: string;
	power: number | null;
	accuracy: number | null;
	pp: number | null;
	priority: number;
	flags: string[];
	effectText: string | null;
	effectChance: number | null;
	isOverridden: boolean;
	overrideNote: string | null;
}
