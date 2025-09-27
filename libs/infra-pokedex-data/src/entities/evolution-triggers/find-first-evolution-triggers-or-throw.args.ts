import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersOrderByWithRelationInput } from './evolution-triggers-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvolutionTriggersScalarFieldEnum } from './evolution-triggers-scalar-field.enum';

@ArgsType()
export class FindFirstEvolutionTriggersOrThrowArgs {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;

    @Field(() => [EvolutionTriggersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvolutionTriggersOrderByWithRelationInput>;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EvolutionTriggersScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EvolutionTriggersScalarFieldEnum}`>;
}
