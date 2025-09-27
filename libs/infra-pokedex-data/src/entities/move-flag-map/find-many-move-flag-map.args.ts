import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';
import { Type } from 'class-transformer';
import { MoveFlagMapOrderByWithRelationInput } from './move-flag-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveFlagMapScalarFieldEnum } from './move-flag-map-scalar-field.enum';

@ArgsType()
export class FindManyMoveFlagMapArgs {

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    @Type(() => MoveFlagMapWhereInput)
    where?: MoveFlagMapWhereInput;

    @Field(() => [MoveFlagMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveFlagMapOrderByWithRelationInput>;

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveFlagMapScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveFlagMapScalarFieldEnum}`>;
}
