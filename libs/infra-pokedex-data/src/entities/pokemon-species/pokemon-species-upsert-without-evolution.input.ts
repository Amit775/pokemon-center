import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutEvolutionInput } from './pokemon-species-update-without-evolution.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEvolutionInput } from './pokemon-species-create-without-evolution.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEvolutionInput {

    @Field(() => PokemonSpeciesUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolutionInput)
    update!: PokemonSpeciesUpdateWithoutEvolutionInput;

    @Field(() => PokemonSpeciesCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionInput)
    create!: PokemonSpeciesCreateWithoutEvolutionInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
