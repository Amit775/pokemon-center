import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsListRelationFilter {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    every?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    some?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    none?: Identity<VersionGroupsWhereInput>;
}
