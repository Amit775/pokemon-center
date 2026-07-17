import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsUpdateInput } from './pokemon-egg-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@ArgsType()
export class UpdateOnePokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsUpdateInput, {nullable:false})
    @Type(() => PokemonEggGroupsUpdateInput)
    data!: Identity<PokemonEggGroupsUpdateInput>;

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;
}
