import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-egg-group-nested.input';

@InputType()
export class EggGroupsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput, {nullable:true})
    species?: Identity<PokemonEggGroupsUpdateManyWithoutEggGroupNestedInput>;
}
