import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonAbilitiesCreateManyInput {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;
}
