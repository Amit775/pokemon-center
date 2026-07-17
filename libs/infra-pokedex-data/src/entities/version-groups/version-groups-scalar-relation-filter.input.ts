import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsScalarRelationFilter {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    is?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    isNot?: Identity<VersionGroupsWhereInput>;
}
