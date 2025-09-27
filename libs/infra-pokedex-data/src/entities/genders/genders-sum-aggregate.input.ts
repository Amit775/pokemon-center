import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GendersSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
