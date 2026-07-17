import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonDexNumbersUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;
}
