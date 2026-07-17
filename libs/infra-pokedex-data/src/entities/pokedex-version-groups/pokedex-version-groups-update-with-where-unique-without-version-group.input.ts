import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsUpdateWithoutVersionGroupInput } from './pokedex-version-groups-update-without-version-group.input';

@InputType()
export class PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateWithoutVersionGroupInput)
    data!: Identity<PokedexVersionGroupsUpdateWithoutVersionGroupInput>;
}
