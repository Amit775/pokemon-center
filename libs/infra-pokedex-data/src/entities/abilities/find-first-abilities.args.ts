import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { AbilitiesOrderByWithRelationInput } from './abilities-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AbilitiesScalarFieldEnum } from './abilities-scalar-field.enum';

@ArgsType()
export class FindFirstAbilitiesArgs {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: AbilitiesWhereInput;

    @Field(() => [AbilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AbilitiesOrderByWithRelationInput>;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AbilitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AbilitiesScalarFieldEnum}`>;
}
