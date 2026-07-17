import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsUpdateWithoutEggGroupInput } from './pokemon-egg-groups-update-without-egg-group.input';

@InputType()
export class PokemonEggGroupsUpdateWithWhereUniqueWithoutEggGroupInput {

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => PokemonEggGroupsUpdateWithoutEggGroupInput, {nullable:false})
    @Type(() => PokemonEggGroupsUpdateWithoutEggGroupInput)
    data!: PokemonEggGroupsUpdateWithoutEggGroupInput;
}
