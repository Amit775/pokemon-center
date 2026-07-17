import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';

@InputType()
export class EncounterSlotsScalarRelationFilter {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    is?: Identity<EncounterSlotsWhereInput>;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    isNot?: Identity<EncounterSlotsWhereInput>;
}
