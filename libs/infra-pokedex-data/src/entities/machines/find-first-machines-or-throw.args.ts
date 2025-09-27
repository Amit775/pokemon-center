import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { MachinesOrderByWithRelationInput } from './machines-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MachinesScalarFieldEnum } from './machines-scalar-field.enum';

@ArgsType()
export class FindFirstMachinesOrThrowArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;

    @Field(() => [MachinesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MachinesOrderByWithRelationInput>;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MachinesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MachinesScalarFieldEnum}`>;
}
