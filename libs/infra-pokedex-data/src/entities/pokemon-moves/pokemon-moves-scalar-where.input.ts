import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PokemonMovesScalarWhereInput {

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonMovesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    level?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    mastery?: IntNullableFilter;
}
