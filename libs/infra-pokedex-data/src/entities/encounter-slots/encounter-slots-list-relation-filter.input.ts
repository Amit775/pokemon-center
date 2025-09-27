import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';

@InputType()
export class EncounterSlotsListRelationFilter {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    every?: EncounterSlotsWhereInput;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    some?: EncounterSlotsWhereInput;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    none?: EncounterSlotsWhereInput;
}
