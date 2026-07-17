import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveBattleStylesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
