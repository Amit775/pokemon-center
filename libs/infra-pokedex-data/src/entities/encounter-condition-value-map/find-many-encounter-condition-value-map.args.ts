import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapOrderByWithRelationInput } from './encounter-condition-value-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValueMapScalarFieldEnum } from './encounter-condition-value-map-scalar-field.enum';

@ArgsType()
export class FindManyEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    @Type(() => EncounterConditionValueMapWhereInput)
    where?: EncounterConditionValueMapWhereInput;

    @Field(() => [EncounterConditionValueMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterConditionValueMapOrderByWithRelationInput>;

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncounterConditionValueMapScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncounterConditionValueMapScalarFieldEnum}`>;
}
