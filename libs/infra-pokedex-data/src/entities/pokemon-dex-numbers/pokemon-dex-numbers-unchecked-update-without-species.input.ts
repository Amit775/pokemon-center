import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonDexNumbersUncheckedUpdateWithoutSpeciesInput {

    @Field(() => Int, {nullable:true})
    pokedex_id?: number;

    @Field(() => Int, {nullable:true})
    pokedex_number?: number;
}
