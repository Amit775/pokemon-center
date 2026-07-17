import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-egg-group-nested.input';

@InputType()
export class EggGroupsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput, {nullable:true})
    species?: Identity<PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupNestedInput>;
}
