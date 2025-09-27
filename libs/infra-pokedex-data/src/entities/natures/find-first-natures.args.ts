import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { NaturesOrderByWithRelationInput } from './natures-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NaturesScalarFieldEnum } from './natures-scalar-field.enum';

@ArgsType()
export class FindFirstNaturesArgs {

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: NaturesWhereInput;

    @Field(() => [NaturesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NaturesOrderByWithRelationInput>;

    @Field(() => NaturesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NaturesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NaturesScalarFieldEnum}`>;
}
