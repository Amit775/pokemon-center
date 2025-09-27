import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Type } from 'class-transformer';
import { EncounterMethodsOrderByWithRelationInput } from './encounter-methods-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterMethodsScalarFieldEnum } from './encounter-methods-scalar-field.enum';

@ArgsType()
export class FindFirstEncounterMethodsArgs {

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => [EncounterMethodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterMethodsOrderByWithRelationInput>;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncounterMethodsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncounterMethodsScalarFieldEnum}`>;
}
