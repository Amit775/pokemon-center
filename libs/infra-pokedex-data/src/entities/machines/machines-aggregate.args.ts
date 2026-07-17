import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { MachinesOrderByWithRelationInput } from './machines-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MachinesCountAggregateInput } from './machines-count-aggregate.input';
import { MachinesAvgAggregateInput } from './machines-avg-aggregate.input';
import { MachinesSumAggregateInput } from './machines-sum-aggregate.input';
import { MachinesMinAggregateInput } from './machines-min-aggregate.input';
import { MachinesMaxAggregateInput } from './machines-max-aggregate.input';

@ArgsType()
export class MachinesAggregateArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: Identity<MachinesWhereInput>;

    @Field(() => [MachinesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MachinesOrderByWithRelationInput>;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MachinesCountAggregateInput, {nullable:true})
    _count?: Identity<MachinesCountAggregateInput>;

    @Field(() => MachinesAvgAggregateInput, {nullable:true})
    _avg?: Identity<MachinesAvgAggregateInput>;

    @Field(() => MachinesSumAggregateInput, {nullable:true})
    _sum?: Identity<MachinesSumAggregateInput>;

    @Field(() => MachinesMinAggregateInput, {nullable:true})
    _min?: Identity<MachinesMinAggregateInput>;

    @Field(() => MachinesMaxAggregateInput, {nullable:true})
    _max?: Identity<MachinesMaxAggregateInput>;
}
