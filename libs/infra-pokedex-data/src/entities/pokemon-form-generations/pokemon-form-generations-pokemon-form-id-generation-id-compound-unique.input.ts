import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;
}
