import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';

@InputType()
export class EncounterMethodsScalarRelationFilter {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    is?: EncounterMethodsWhereInput;

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    isNot?: EncounterMethodsWhereInput;
}
