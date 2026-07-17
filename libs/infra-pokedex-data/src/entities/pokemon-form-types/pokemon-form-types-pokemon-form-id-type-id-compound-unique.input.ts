import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormTypesPokemon_form_idType_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;
}
