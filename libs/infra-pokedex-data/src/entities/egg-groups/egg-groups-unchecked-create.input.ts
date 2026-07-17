import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUncheckedCreateNestedManyWithoutEggGroupInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-create-nested-many-without-egg-group.input';

@InputType()
export class EggGroupsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEggGroupsUncheckedCreateNestedManyWithoutEggGroupInput, {nullable:true})
    species?: Identity<PokemonEggGroupsUncheckedCreateNestedManyWithoutEggGroupInput>;
}
