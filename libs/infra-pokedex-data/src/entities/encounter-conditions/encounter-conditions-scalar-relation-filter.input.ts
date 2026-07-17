import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';

@InputType()
export class EncounterConditionsScalarRelationFilter {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    is?: Identity<EncounterConditionsWhereInput>;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    isNot?: Identity<EncounterConditionsWhereInput>;
}
