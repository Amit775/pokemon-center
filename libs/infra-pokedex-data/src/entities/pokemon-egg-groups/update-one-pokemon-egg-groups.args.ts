import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEggGroupsUpdateInput } from './pokemon-egg-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';

@ArgsType()
export class UpdateOnePokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsUpdateInput, {nullable:false})
    @Type(() => PokemonEggGroupsUpdateInput)
    data!: PokemonEggGroupsUpdateInput;

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEggGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;
}
