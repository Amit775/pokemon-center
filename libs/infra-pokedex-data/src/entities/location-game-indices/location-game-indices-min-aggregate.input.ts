import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocationGameIndicesMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    location_id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
