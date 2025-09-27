import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';

@InputType()
export class EncounterSlotsScalarRelationFilter {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    is?: EncounterSlotsWhereInput;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    isNot?: EncounterSlotsWhereInput;
}
