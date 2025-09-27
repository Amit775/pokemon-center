import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersOrderByWithRelationInput } from './encounters-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncountersScalarFieldEnum } from './encounters-scalar-field.enum';

@ArgsType()
export class FindFirstEncountersArgs {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => [EncountersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncountersOrderByWithRelationInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EncountersScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EncountersScalarFieldEnum}`>;
}
