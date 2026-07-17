import { registerEnumType } from '@nestjs/graphql';

export enum CharacteristicsScalarFieldEnum {
    id = "id",
    stat_id = "stat_id",
    gene_mod_5 = "gene_mod_5"
}


registerEnumType(CharacteristicsScalarFieldEnum, { name: 'CharacteristicsScalarFieldEnum', description: undefined })
