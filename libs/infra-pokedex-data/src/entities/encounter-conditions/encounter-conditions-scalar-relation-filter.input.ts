import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';

@InputType()
export class EncounterConditionsScalarRelationFilter {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    is?: EncounterConditionsWhereInput;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    isNot?: EncounterConditionsWhereInput;
}
