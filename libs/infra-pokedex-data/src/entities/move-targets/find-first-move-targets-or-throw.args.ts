import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { MoveTargetsOrderByWithRelationInput } from './move-targets-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveTargetsScalarFieldEnum } from './move-targets-scalar-field.enum';

@ArgsType()
export class FindFirstMoveTargetsOrThrowArgs {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;

    @Field(() => [MoveTargetsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveTargetsOrderByWithRelationInput>;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveTargetsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveTargetsScalarFieldEnum}`>;
}
