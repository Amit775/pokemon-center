import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupRegionsUncheckedCreateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:false})
    region_id!: number;
}
