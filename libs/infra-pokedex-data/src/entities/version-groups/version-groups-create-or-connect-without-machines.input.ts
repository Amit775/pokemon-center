import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutMachinesInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutMachinesInput)
    create!: Identity<VersionGroupsCreateWithoutMachinesInput>;
}
