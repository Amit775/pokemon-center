import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemsUncheckedUpdateManyWithoutFlingEffectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Int, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;
}
