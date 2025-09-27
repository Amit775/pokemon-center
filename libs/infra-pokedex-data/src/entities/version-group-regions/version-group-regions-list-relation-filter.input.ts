import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';

@InputType()
export class VersionGroupRegionsListRelationFilter {

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    every?: VersionGroupRegionsWhereInput;

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    some?: VersionGroupRegionsWhereInput;

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    none?: VersionGroupRegionsWhereInput;
}
