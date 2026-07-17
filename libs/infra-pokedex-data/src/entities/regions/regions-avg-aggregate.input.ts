import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RegionsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
