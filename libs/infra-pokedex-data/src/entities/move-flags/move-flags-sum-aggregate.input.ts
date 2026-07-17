import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveFlagsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
