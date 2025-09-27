import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsScalarRelationFilter {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    is?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    isNot?: VersionGroupsWhereInput;
}
