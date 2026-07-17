import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCreateNestedManyWithoutEggGroupInput } from '../pokemon-egg-groups/pokemon-egg-groups-create-nested-many-without-egg-group.input';

@InputType()
export class EggGroupsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEggGroupsCreateNestedManyWithoutEggGroupInput, {nullable:true})
    species?: Identity<PokemonEggGroupsCreateNestedManyWithoutEggGroupInput>;
}
