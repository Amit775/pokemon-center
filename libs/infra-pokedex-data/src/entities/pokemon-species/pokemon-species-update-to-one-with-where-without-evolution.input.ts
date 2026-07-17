import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutEvolutionInput } from './pokemon-species-update-without-evolution.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutEvolutionInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolutionInput)
    data!: Identity<PokemonSpeciesUpdateWithoutEvolutionInput>;
}
