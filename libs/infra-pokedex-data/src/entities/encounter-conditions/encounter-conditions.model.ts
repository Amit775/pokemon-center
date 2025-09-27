import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EncounterConditionValues } from '../encounter-condition-values/encounter-condition-values.model';
import { EncounterConditionsCount } from './encounter-conditions-count.output';

/**
 * @@TypeGraphQL.type(name: "EncounterCondition")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EncounterCondition")'})
export class EncounterConditions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [EncounterConditionValues], {nullable:true})
    values?: Array<EncounterConditionValues>;

    @Field(() => EncounterConditionsCount, {nullable:false})
    _count?: EncounterConditionsCount;
}
