import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from './version-groups-create-without-version-group-regions.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutVersionGroupRegionsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutVersionGroupRegionsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionGroupRegionsInput)
    create!: VersionGroupsCreateWithoutVersionGroupRegionsInput;
}
