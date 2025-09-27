import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveMetaMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    move_id?: true;

    @Field(() => Boolean, {nullable:true})
    meta_category_id?: true;

    @Field(() => Boolean, {nullable:true})
    meta_ailment_id?: true;

    @Field(() => Boolean, {nullable:true})
    min_hits?: true;

    @Field(() => Boolean, {nullable:true})
    max_hits?: true;

    @Field(() => Boolean, {nullable:true})
    min_turns?: true;

    @Field(() => Boolean, {nullable:true})
    max_turns?: true;

    @Field(() => Boolean, {nullable:true})
    drain?: true;

    @Field(() => Boolean, {nullable:true})
    healing?: true;

    @Field(() => Boolean, {nullable:true})
    crit_rate?: true;

    @Field(() => Boolean, {nullable:true})
    ailment_chance?: true;

    @Field(() => Boolean, {nullable:true})
    flinch_chance?: true;

    @Field(() => Boolean, {nullable:true})
    stat_chance?: true;
}
