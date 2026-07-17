import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutPokedexInput } from './pokedex-version-groups-create-without-pokedex.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutPokedexInput } from './pokedex-version-groups-create-or-connect-without-pokedex.input';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateManyPokedexInputEnvelope } from './pokedex-version-groups-create-many-pokedex-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';

@InputType()
export class PokedexVersionGroupsCreateNestedManyWithoutPokedexInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutPokedexInput)
    create?: Array<PokedexVersionGroupsCreateWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutPokedexInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutPokedexInput>;

    @Field(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope)
    createMany?: Identity<PokedexVersionGroupsCreateManyPokedexInputEnvelope>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;
}
