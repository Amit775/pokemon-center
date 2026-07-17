import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput } from './pokemon-egg-groups-unchecked-update-many-without-egg-group.input';

@InputType()
export class PokemonEggGroupsUpdateManyWithWhereWithoutEggGroupInput {

    @Field(() => PokemonEggGroupsScalarWhereInput, {nullable:false})
    @Type(() => PokemonEggGroupsScalarWhereInput)
    where!: Identity<PokemonEggGroupsScalarWhereInput>;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput, {nullable:false})
    @Type(() => PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput)
    data!: Identity<PokemonEggGroupsUncheckedUpdateManyWithoutEggGroupInput>;
}
