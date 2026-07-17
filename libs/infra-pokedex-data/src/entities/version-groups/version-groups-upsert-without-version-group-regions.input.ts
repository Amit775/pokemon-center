import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutVersionGroupRegionsInput } from './version-groups-update-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from './version-groups-create-without-version-group-regions.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutVersionGroupRegionsInput {

    @Field(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionGroupRegionsInput)
    update!: Identity<VersionGroupsUpdateWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsCreateWithoutVersionGroupRegionsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionGroupRegionsInput)
    create!: Identity<VersionGroupsCreateWithoutVersionGroupRegionsInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;
}
