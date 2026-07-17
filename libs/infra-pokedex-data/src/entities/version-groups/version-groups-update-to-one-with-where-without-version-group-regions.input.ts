import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutVersionGroupRegionsInput } from './version-groups-update-without-version-group-regions.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput)
    data!: VersionGroupsUpdateWithoutVersionGroupRegionsInput;
}
