import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemsCreateManyCategoryInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => Int, {nullable:true})
    fling_effect_id?: number;
}
