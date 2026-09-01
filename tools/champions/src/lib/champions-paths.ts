export const CHAMPIONS_DATA_DIRECTORY = 'data/champions';
export const RAW_DIRECTORY = `${CHAMPIONS_DATA_DIRECTORY}/raw`;
export const REGULATIONS_DIRECTORY = `${CHAMPIONS_DATA_DIRECTORY}/regulations`;

export function regulationDirectory(code: string): string {
	return `${REGULATIONS_DIRECTORY}/${code}`;
}

export function rosterFilePath(code: string): string {
	return `${regulationDirectory(code)}/roster.tsv`;
}

export function regulationMetadataPath(code: string): string {
	return `${regulationDirectory(code)}/regulation.json`;
}
