import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput {

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VersionGroupPokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_move_method_id?: Identity<IntWithAggregatesFilter>;
}
