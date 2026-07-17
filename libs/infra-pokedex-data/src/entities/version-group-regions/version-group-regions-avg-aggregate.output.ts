import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VersionGroupRegionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    version_group_id?: number;

    @Field(() => Float, {nullable:true})
    region_id?: number;
}
