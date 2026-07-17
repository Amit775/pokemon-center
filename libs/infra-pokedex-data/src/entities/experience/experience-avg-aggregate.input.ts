import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExperienceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    growth_rate_id?: true;

    @Field(() => Boolean, {nullable:true})
    level?: true;

    @Field(() => Boolean, {nullable:true})
    experience?: true;
}
