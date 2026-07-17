import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupRegionsUncheckedUpdateManyInput {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;
}
