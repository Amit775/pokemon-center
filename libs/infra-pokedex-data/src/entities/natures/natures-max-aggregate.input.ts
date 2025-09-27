import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NaturesMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    identifier?: true;

    @Field(() => Boolean, {nullable:true})
    decreased_stat_id?: true;

    @Field(() => Boolean, {nullable:true})
    increased_stat_id?: true;

    @Field(() => Boolean, {nullable:true})
    hates_flavor_id?: true;

    @Field(() => Boolean, {nullable:true})
    likes_flavor_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
