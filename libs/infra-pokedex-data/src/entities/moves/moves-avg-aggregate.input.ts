import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MovesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    type_id?: true;

    @Field(() => Boolean, {nullable:true})
    power?: true;

    @Field(() => Boolean, {nullable:true})
    pp?: true;

    @Field(() => Boolean, {nullable:true})
    accuracy?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;

    @Field(() => Boolean, {nullable:true})
    target_id?: true;

    @Field(() => Boolean, {nullable:true})
    damage_class_id?: true;

    @Field(() => Boolean, {nullable:true})
    effect_id?: true;

    @Field(() => Boolean, {nullable:true})
    effect_chance?: true;

    @Field(() => Boolean, {nullable:true})
    contest_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    contest_effect_id?: true;

    @Field(() => Boolean, {nullable:true})
    super_contest_effect_id?: true;
}
