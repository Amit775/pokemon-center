import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionGroupRegionsSumAggregate {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;
}
