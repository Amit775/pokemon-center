import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsListRelationFilter {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    every?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    some?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    none?: VersionGroupsWhereInput;
}
