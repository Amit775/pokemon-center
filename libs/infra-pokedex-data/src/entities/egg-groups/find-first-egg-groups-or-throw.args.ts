import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { EggGroupsOrderByWithRelationInput } from './egg-groups-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EggGroupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EggGroupsScalarFieldEnum } from './egg-groups-scalar-field.enum';

@ArgsType()
export class FindFirstEggGroupsOrThrowArgs {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => [EggGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EggGroupsOrderByWithRelationInput>;

    @Field(() => EggGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EggGroupsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EggGroupsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EggGroupsScalarFieldEnum}`>;
}
