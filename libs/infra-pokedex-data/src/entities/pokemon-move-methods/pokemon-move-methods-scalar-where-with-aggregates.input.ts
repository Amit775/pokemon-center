import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokemonMoveMethodsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMoveMethodsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
