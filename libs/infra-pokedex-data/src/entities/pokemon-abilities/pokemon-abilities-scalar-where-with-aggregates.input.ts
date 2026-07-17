import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonAbilitiesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_hidden?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: Identity<IntWithAggregatesFilter>;
}
