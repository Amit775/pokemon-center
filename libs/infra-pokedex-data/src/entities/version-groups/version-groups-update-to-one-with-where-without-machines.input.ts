import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutMachinesInput } from './version-groups-update-without-machines.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutMachinesInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutMachinesInput)
    data!: Identity<VersionGroupsUpdateWithoutMachinesInput>;
}
