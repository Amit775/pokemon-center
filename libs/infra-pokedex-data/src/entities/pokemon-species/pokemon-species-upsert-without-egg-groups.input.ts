import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from './pokemon-species-update-without-egg-groups.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEggGroupsInput } from './pokemon-species-create-without-egg-groups.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesUpdateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEggGroupsInput)
    update!: Identity<PokemonSpeciesUpdateWithoutEggGroupsInput>;

    @Field(() => PokemonSpeciesCreateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEggGroupsInput)
    create!: Identity<PokemonSpeciesCreateWithoutEggGroupsInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;
}
