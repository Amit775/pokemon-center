import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutVersionGroupRegionsInput } from './version-groups-update-without-version-group-regions.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput)
    data!: Identity<VersionGroupsUpdateWithoutVersionGroupRegionsInput>;
}
