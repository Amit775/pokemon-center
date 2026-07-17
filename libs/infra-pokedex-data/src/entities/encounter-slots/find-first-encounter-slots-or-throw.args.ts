import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsOrderByWithRelationInput } from './encounter-slots-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsScalarFieldEnum } from './encounter-slots-scalar-field.enum';

@ArgsType()
export class FindFirstEncounterSlotsOrThrowArgs {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: Identity<EncounterSlotsWhereInput>;

    @Field(() => [EncounterSlotsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterSlotsOrderByWithRelationInput>;

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncounterSlotsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncounterSlotsScalarFieldEnum}`>;
}
