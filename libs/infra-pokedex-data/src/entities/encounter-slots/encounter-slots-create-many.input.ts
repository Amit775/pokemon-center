import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterSlotsCreateManyInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => Int, {nullable:false})
    rarity!: number;
}
