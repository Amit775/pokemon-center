import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BerryFlavorsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    berry_id?: true;

    @Field(() => Boolean, {nullable:true})
    contest_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    flavor?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
