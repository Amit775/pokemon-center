import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonTypesPokemon_idType_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;
}
