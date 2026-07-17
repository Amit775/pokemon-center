import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionGroupRegionsCountAggregate {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
