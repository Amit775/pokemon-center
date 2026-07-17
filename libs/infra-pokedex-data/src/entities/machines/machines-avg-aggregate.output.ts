import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MachinesAvgAggregate {

    @Field(() => Float, {nullable:true})
    machine_number?: number;

    @Field(() => Float, {nullable:true})
    version_group_id?: number;

    @Field(() => Float, {nullable:true})
    item_id?: number;

    @Field(() => Float, {nullable:true})
    move_id?: number;
}
