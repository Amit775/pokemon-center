import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EncounterSlotsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    encounter_method_id?: true;

    @Field(() => Boolean, {nullable:true})
    slot?: true;

    @Field(() => Boolean, {nullable:true})
    rarity?: true;
}
