import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesOrderByWithRelationInput } from './move-damage-classes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveDamageClassesScalarFieldEnum } from './move-damage-classes-scalar-field.enum';

@ArgsType()
export class FindFirstMoveDamageClassesOrThrowArgs {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => [MoveDamageClassesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveDamageClassesOrderByWithRelationInput>;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveDamageClassesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveDamageClassesScalarFieldEnum}`>;
}
