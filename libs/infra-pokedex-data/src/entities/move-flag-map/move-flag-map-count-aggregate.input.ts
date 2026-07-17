import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    move_id?: true;

    @Field(() => Boolean, {nullable:true})
    move_flag_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
