import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemFlagMapSumAggregate {

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => Int, {nullable:true})
    item_flag_id?: number;
}
