import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';

@InputType()
export class EncounterMethodsScalarRelationFilter {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    is?: Identity<EncounterMethodsWhereInput>;

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    isNot?: Identity<EncounterMethodsWhereInput>;
}
