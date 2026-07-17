import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonMovesScalarWhereInput {

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    mastery?: Identity<IntFilter>;
}
