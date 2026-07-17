import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EvolutionChainsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    baby_trigger_item_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
