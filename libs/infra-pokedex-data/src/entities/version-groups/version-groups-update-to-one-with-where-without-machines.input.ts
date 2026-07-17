import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutMachinesInput } from './version-groups-update-without-machines.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutMachinesInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutMachinesInput)
    data!: VersionGroupsUpdateWithoutMachinesInput;
}
