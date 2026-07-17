import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutEvolutionInput } from './pokemon-species-update-without-evolution.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolutionInput)
    data!: PokemonSpeciesUpdateWithoutEvolutionInput;
}
