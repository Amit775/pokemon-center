import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MoveMetaStatChangesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    move_id?: true;

    @Field(() => Boolean, {nullable:true})
    stat_id?: true;

    @Field(() => Boolean, {nullable:true})
    change?: true;
}
