import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesOrderByWithRelationInput } from './move-battle-styles-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveBattleStylesScalarFieldEnum } from './move-battle-styles-scalar-field.enum';

@ArgsType()
export class FindFirstMoveBattleStylesOrThrowArgs {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;

    @Field(() => [MoveBattleStylesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveBattleStylesOrderByWithRelationInput>;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveBattleStylesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveBattleStylesScalarFieldEnum}`>;
}
