import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonMovesUncheckedUpdateManyWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => Int, {nullable:true})
    move_id?: number;

    @Field(() => Int, {nullable:true})
    pokemon_move_method_id?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;
}
