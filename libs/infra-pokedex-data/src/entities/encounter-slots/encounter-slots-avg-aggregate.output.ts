import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EncounterSlotsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    version_group_id?: number;

    @Field(() => Float, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Float, {nullable:true})
    slot?: number;

    @Field(() => Float, {nullable:true})
    rarity?: number;
}
