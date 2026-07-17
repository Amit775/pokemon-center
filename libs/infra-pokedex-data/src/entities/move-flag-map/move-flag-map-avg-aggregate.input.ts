import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    move_id?: true;

    @Field(() => Boolean, {nullable:true})
    move_flag_id?: true;
}
