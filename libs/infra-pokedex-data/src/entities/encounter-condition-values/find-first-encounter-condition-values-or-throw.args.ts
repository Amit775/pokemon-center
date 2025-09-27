import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesOrderByWithRelationInput } from './encounter-condition-values-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesScalarFieldEnum } from './encounter-condition-values-scalar-field.enum';

@ArgsType()
export class FindFirstEncounterConditionValuesOrThrowArgs {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: EncounterConditionValuesWhereInput;

    @Field(() => [EncounterConditionValuesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterConditionValuesOrderByWithRelationInput>;

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncounterConditionValuesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncounterConditionValuesScalarFieldEnum}`>;
}
