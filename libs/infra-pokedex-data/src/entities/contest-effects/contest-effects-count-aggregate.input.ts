import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContestEffectsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    appeal?: true;

    @Field(() => Boolean, {nullable:true})
    jam?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
