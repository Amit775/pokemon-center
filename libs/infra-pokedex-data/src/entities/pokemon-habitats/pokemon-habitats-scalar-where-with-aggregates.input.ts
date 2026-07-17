import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokemonHabitatsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonHabitatsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonHabitatsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonHabitatsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonHabitatsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonHabitatsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonHabitatsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
