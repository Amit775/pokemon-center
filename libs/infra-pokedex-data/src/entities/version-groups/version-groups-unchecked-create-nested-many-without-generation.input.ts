import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutGenerationInput } from './version-groups-create-without-generation.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutGenerationInput } from './version-groups-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateManyGenerationInputEnvelope } from './version-groups-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsUncheckedCreateNestedManyWithoutGenerationInput {

    @Field(() => [VersionGroupsCreateWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsCreateWithoutGenerationInput)
    create?: Array<VersionGroupsCreateWithoutGenerationInput>;

    @Field(() => [VersionGroupsCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<VersionGroupsCreateOrConnectWithoutGenerationInput>;

    @Field(() => VersionGroupsCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => VersionGroupsCreateManyGenerationInputEnvelope)
    createMany?: Identity<VersionGroupsCreateManyGenerationInputEnvelope>;

    @Field(() => [VersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>>;
}
