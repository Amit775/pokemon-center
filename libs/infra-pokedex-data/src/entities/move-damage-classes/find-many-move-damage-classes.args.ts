import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesOrderByWithRelationInput } from './move-damage-classes-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveDamageClassesScalarFieldEnum } from './move-damage-classes-scalar-field.enum';

@ArgsType()
export class FindManyMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: Identity<MoveDamageClassesWhereInput>;

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
