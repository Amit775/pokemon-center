import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutVersionsInput } from './version-groups-update-without-versions.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutVersionsInput } from './version-groups-create-without-versions.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutVersionsInput {

    @Field(() => VersionGroupsUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionsInput)
    update!: Identity<VersionGroupsUpdateWithoutVersionsInput>;

    @Field(() => VersionGroupsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionsInput)
    create!: Identity<VersionGroupsCreateWithoutVersionsInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;
}
