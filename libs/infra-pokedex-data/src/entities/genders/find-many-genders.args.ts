import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersWhereInput } from './genders-where.input';
import { Type } from 'class-transformer';
import { GendersOrderByWithRelationInput } from './genders-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GendersWhereUniqueInput } from './genders-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GendersScalarFieldEnum } from './genders-scalar-field.enum';

@ArgsType()
export class FindManyGendersArgs {

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: GendersWhereInput;

    @Field(() => [GendersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GendersOrderByWithRelationInput>;

    @Field(() => GendersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GendersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GendersScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GendersScalarFieldEnum}`>;
}
