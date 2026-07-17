import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';

@InputType()
export class EncounterSlotsListRelationFilter {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    every?: Identity<EncounterSlotsWhereInput>;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    some?: Identity<EncounterSlotsWhereInput>;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    none?: Identity<EncounterSlotsWhereInput>;
}
