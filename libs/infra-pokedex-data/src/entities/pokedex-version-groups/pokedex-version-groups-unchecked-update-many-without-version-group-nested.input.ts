import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from './pokedex-version-groups-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput } from './pokedex-version-groups-create-or-connect-without-version-group.input';
import { PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput } from './pokedex-version-groups-upsert-with-where-unique-without-version-group.input';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateManyVersionGroupInputEnvelope } from './pokedex-version-groups-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput } from './pokedex-version-groups-update-with-where-unique-without-version-group.input';
import { PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput } from './pokedex-version-groups-update-many-with-where-without-version-group.input';
import { PokedexVersionGroupsScalarWhereInput } from './pokedex-version-groups-scalar-where.input';

@InputType()
export class PokedexVersionGroupsUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutVersionGroupInput)
    create?: Array<PokedexVersionGroupsCreateWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<PokedexVersionGroupsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;

    @Field(() => [PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereInput], {nullable:true})
    @Type(() => PokedexVersionGroupsScalarWhereInput)
    deleteMany?: Array<PokedexVersionGroupsScalarWhereInput>;
}
