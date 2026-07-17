import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonEggGroupsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonEggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonEggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonEggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonEggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonEggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonEggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    egg_group_id?: Identity<IntWithAggregatesFilter>;
}
