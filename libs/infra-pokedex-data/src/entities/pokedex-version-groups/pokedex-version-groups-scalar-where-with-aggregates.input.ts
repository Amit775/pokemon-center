import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokedexVersionGroupsScalarWhereWithAggregatesInput {

    @Field(() => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokedexVersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokedexVersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokedexVersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;
}
