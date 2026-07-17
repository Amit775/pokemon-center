import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GenerationsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    main_region_id?: true;

    @Field(() => Boolean, {nullable:true})
    identifier?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
