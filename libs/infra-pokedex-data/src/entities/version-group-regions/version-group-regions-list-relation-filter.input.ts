import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';

@InputType()
export class VersionGroupRegionsListRelationFilter {

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    every?: Identity<VersionGroupRegionsWhereInput>;

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    some?: Identity<VersionGroupRegionsWhereInput>;

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    none?: Identity<VersionGroupRegionsWhereInput>;
}
