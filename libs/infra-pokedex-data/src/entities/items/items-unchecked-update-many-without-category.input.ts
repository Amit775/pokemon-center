import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemsUncheckedUpdateManyWithoutCategoryInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    cost?: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => Int, {nullable:true})
    fling_effect_id?: number;
}
