import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutEvolutionInput } from './pokemon-species-update-without-evolution.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEvolutionInput } from './pokemon-species-create-without-evolution.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEvolutionInput {

    @Field(() => PokemonSpeciesUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolutionInput)
    update!: Identity<PokemonSpeciesUpdateWithoutEvolutionInput>;

    @Field(() => PokemonSpeciesCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolutionInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;
}
