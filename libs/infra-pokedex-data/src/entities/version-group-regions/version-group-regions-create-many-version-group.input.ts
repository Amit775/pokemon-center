import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupRegionsCreateManyVersionGroupInput {

    @Field(() => Int, {nullable:false})
    region_id!: number;
}
