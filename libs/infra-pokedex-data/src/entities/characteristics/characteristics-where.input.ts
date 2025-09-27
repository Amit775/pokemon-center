import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StatsScalarRelationFilter } from '../stats/stats-scalar-relation-filter.input';

@InputType()
export class CharacteristicsWhereInput {

    @Field(() => [CharacteristicsWhereInput], {nullable:true})
    AND?: Array<CharacteristicsWhereInput>;

    @Field(() => [CharacteristicsWhereInput], {nullable:true})
    OR?: Array<CharacteristicsWhereInput>;

    @Field(() => [CharacteristicsWhereInput], {nullable:true})
    NOT?: Array<CharacteristicsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    gene_mod_5?: IntFilter;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    stat?: StatsScalarRelationFilter;
}
