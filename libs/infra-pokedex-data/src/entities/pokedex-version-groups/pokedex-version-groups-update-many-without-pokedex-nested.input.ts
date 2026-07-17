import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutPokedexInput } from './pokedex-version-groups-create-without-pokedex.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutPokedexInput } from './pokedex-version-groups-create-or-connect-without-pokedex.input';
import { PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput } from './pokedex-version-groups-upsert-with-where-unique-without-pokedex.input';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateManyPokedexInputEnvelope } from './pokedex-version-groups-create-many-pokedex-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput } from './pokedex-version-groups-update-with-where-unique-without-pokedex.input';
import { PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput } from './pokedex-version-groups-update-many-with-where-without-pokedex.input';
import { PokedexVersionGroupsScalarWhereInput } from './pokedex-version-groups-scalar-where.input';

@InputType()
export class PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutPokedexInput)
    create?: Array<PokedexVersionGroupsCreateWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutPokedexInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput)
    upsert?: Array<PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput>;

    @Field(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope)
    createMany?: Identity<PokedexVersionGroupsCreateManyPokedexInputEnvelope>;

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

    @Field(() => [PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput)
    update?: Array<PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput)
    updateMany?: Array<PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsScalarWhereInput], {nullable:true})
    @Type(() => PokedexVersionGroupsScalarWhereInput)
    deleteMany?: Array<PokedexVersionGroupsScalarWhereInput>;
}
