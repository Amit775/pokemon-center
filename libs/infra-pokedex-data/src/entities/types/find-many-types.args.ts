import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesOrderByWithRelationInput } from './types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypesScalarFieldEnum } from './types-scalar-field.enum';

@ArgsType()
export class FindManyTypesArgs {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => [TypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypesOrderByWithRelationInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TypesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TypesScalarFieldEnum}`>;
}
