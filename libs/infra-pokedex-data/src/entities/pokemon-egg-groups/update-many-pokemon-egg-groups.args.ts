import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUncheckedUpdateManyInput } from './pokemon-egg-groups-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => PokemonEggGroupsUncheckedUpdateManyInput)
    data!: Identity<PokemonEggGroupsUncheckedUpdateManyInput>;

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    @Type(() => PokemonEggGroupsWhereInput)
    where?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
