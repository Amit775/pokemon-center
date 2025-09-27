import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { BerryFirmnessOrderByWithRelationInput } from './berry-firmness-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BerryFirmnessScalarFieldEnum } from './berry-firmness-scalar-field.enum';

@ArgsType()
export class FindFirstBerryFirmnessArgs {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => [BerryFirmnessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BerryFirmnessOrderByWithRelationInput>;

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BerryFirmnessScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BerryFirmnessScalarFieldEnum}`>;
}
