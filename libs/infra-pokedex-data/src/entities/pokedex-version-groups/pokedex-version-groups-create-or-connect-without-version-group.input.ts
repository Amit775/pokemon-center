import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from './pokedex-version-groups-create-without-version-group.input';

@InputType()
export class PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateWithoutVersionGroupInput)
    create!: Identity<PokedexVersionGroupsCreateWithoutVersionGroupInput>;
}
