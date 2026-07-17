import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsScalarWhereInput } from './pokemon-egg-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput } from './pokemon-egg-groups-unchecked-update-many-without-species.input';

@InputType()
export class PokemonEggGroupsUpdateManyWithWhereWithoutSpeciesInput {

    @Field(() => PokemonEggGroupsScalarWhereInput, {nullable:false})
    @Type(() => PokemonEggGroupsScalarWhereInput)
    where!: Identity<PokemonEggGroupsScalarWhereInput>;

    @Field(() => PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput)
    data!: Identity<PokemonEggGroupsUncheckedUpdateManyWithoutSpeciesInput>;
}
