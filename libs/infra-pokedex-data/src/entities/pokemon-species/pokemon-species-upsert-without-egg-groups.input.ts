import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from './pokemon-species-update-without-egg-groups.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEggGroupsInput } from './pokemon-species-create-without-egg-groups.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesUpdateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEggGroupsInput)
    update!: PokemonSpeciesUpdateWithoutEggGroupsInput;

    @Field(() => PokemonSpeciesCreateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEggGroupsInput)
    create!: PokemonSpeciesCreateWithoutEggGroupsInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
