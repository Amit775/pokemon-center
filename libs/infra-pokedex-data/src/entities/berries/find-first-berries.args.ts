import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { BerriesOrderByWithRelationInput } from './berries-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BerriesScalarFieldEnum } from './berries-scalar-field.enum';

@ArgsType()
export class FindFirstBerriesArgs {

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: BerriesWhereInput;

    @Field(() => [BerriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BerriesOrderByWithRelationInput>;

    @Field(() => BerriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BerriesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BerriesScalarFieldEnum}`>;
}
