import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutVersionsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionsInput)
    create!: Identity<VersionGroupsCreateWithoutVersionsInput>;
}
