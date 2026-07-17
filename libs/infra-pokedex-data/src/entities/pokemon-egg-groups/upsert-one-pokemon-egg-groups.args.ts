import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsCreateInput } from './pokemon-egg-groups-create.input';
import { PokemonEggGroupsUpdateInput } from './pokemon-egg-groups-update.input';

@ArgsType()
export class UpsertOnePokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => PokemonEggGroupsCreateInput, {nullable:false})
    @Type(() => PokemonEggGroupsCreateInput)
    create!: PokemonEggGroupsCreateInput;

    @Field(() => PokemonEggGroupsUpdateInput, {nullable:false})
    @Type(() => PokemonEggGroupsUpdateInput)
    update!: PokemonEggGroupsUpdateInput;
}
