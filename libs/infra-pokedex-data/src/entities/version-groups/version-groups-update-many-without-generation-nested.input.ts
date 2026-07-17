import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutGenerationInput } from './version-groups-create-without-generation.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutGenerationInput } from './version-groups-create-or-connect-without-generation.input';
import { VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput } from './version-groups-upsert-with-where-unique-without-generation.input';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateManyGenerationInputEnvelope } from './version-groups-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput } from './version-groups-update-with-where-unique-without-generation.input';
import { VersionGroupsUpdateManyWithWhereWithoutGenerationInput } from './version-groups-update-many-with-where-without-generation.input';
import { VersionGroupsScalarWhereInput } from './version-groups-scalar-where.input';

@InputType()
export class VersionGroupsUpdateManyWithoutGenerationNestedInput {

    @Field(() => [VersionGroupsCreateWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsCreateWithoutGenerationInput)
    create?: Array<VersionGroupsCreateWithoutGenerationInput>;

    @Field(() => [VersionGroupsCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<VersionGroupsCreateOrConnectWithoutGenerationInput>;

    @Field(() => [VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => VersionGroupsCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => VersionGroupsCreateManyGenerationInputEnvelope)
    createMany?: Identity<VersionGroupsCreateManyGenerationInputEnvelope>;

    @Field(() => [VersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>>;

    @Field(() => [VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [VersionGroupsUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<VersionGroupsUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [VersionGroupsScalarWhereInput], {nullable:true})
    @Type(() => VersionGroupsScalarWhereInput)
    deleteMany?: Array<VersionGroupsScalarWhereInput>;
}
