import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsOrderByWithRelationInput } from './regions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegionsScalarFieldEnum } from './regions-scalar-field.enum';

@ArgsType()
export class FindFirstRegionsOrThrowArgs {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => [RegionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionsOrderByWithRelationInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RegionsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RegionsScalarFieldEnum}`>;
}
