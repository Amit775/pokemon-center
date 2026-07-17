import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    region_id?: number;
}
