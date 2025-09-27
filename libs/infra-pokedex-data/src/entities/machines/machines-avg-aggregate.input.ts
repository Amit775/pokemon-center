import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MachinesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    machine_number?: true;

    @Field(() => Boolean, {nullable:true})
    version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    move_id?: true;
}
