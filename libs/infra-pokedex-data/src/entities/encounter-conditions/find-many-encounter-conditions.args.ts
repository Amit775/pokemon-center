import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionsOrderByWithRelationInput } from './encounter-conditions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionsScalarFieldEnum } from './encounter-conditions-scalar-field.enum';

@ArgsType()
export class FindManyEncounterConditionsArgs {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: EncounterConditionsWhereInput;

    @Field(() => [EncounterConditionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterConditionsOrderByWithRelationInput>;

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncounterConditionsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncounterConditionsScalarFieldEnum}`>;
}
