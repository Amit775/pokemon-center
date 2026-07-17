import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateWithoutMachinesInput } from './version-groups-update-without-machines.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutMachinesInput } from './version-groups-create-without-machines.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutMachinesInput {

    @Field(() => VersionGroupsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutMachinesInput)
    update!: VersionGroupsUpdateWithoutMachinesInput;

    @Field(() => VersionGroupsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutMachinesInput)
    create!: VersionGroupsCreateWithoutMachinesInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;
}
