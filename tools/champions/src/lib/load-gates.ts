import type { RegulationMetadata } from './regulation-file';

export const SPECIES_COUNT_TOLERANCE = 0.05;

export interface LoadProblem {
	gate: 'species-count' | 'regulation-window' | 'unresolved-species';
	message: string;
}

export interface GateInput {
	statedSpeciesCount: number | null;
	parsedSpeciesCount: number;
	regulation: RegulationMetadata;
	unresolvedSpeciesSectionEntries: readonly string[];
}

const UNRESOLVED_ENTRIES_TO_NAME = 10;

function isValidDate(value: string): boolean {
	return !Number.isNaN(new Date(value).getTime());
}

export function findLoadProblems(input: GateInput): LoadProblem[] {
	const problems: LoadProblem[] = [];
	const { statedSpeciesCount, parsedSpeciesCount, regulation, unresolvedSpeciesSectionEntries } = input;

	if (statedSpeciesCount !== null && statedSpeciesCount > 0) {
		const drift = Math.abs(parsedSpeciesCount - statedSpeciesCount) / statedSpeciesCount;
		if (drift > SPECIES_COUNT_TOLERANCE) {
			problems.push({
				gate: 'species-count',
				message: `The roster page states ${statedSpeciesCount} species but ${parsedSpeciesCount} parsed. The template shape has probably changed.`,
			});
		}
	}

	if (!isValidDate(regulation.startsOn) || !isValidDate(regulation.endsOn) || new Date(regulation.endsOn) <= new Date(regulation.startsOn)) {
		problems.push({
			gate: 'regulation-window',
			message: `Regulation ${regulation.code} has an invalid window: ${regulation.startsOn} to ${regulation.endsOn}.`,
		});
	}

	if (unresolvedSpeciesSectionEntries.length > 0) {
		problems.push({
			gate: 'unresolved-species',
			message: `${unresolvedSpeciesSectionEntries.length} species-section entries did not resolve against the mainline dataset: ${unresolvedSpeciesSectionEntries.slice(0, UNRESOLVED_ENTRIES_TO_NAME).join(', ')}`,
		});
	}

	return problems;
}
