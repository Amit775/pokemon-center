import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    @Type(() => PokemonEggGroupsWhereInput)
    where?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
