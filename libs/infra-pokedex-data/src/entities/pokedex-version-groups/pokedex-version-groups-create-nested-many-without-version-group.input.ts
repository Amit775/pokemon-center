import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from './pokedex-version-groups-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput } from './pokedex-version-groups-create-or-connect-without-version-group.input';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateManyVersionGroupInputEnvelope } from './pokedex-version-groups-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';

@InputType()
export class PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutVersionGroupInput)
    create?: Array<PokedexVersionGroupsCreateWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<PokedexVersionGroupsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;
}
