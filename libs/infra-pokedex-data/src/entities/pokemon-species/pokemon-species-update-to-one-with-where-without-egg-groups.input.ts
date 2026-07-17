import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutEggGroupsInput } from './pokemon-species-update-without-egg-groups.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesUpdateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEggGroupsInput)
    data!: Identity<PokemonSpeciesUpdateWithoutEggGroupsInput>;
}
