import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersCreateOrConnectWithoutEvolutionInput } from './evolution-triggers-create-or-connect-without-evolution.input';
import { Prisma } from '@prisma/client';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';

@InputType()
export class EvolutionTriggersCreateNestedOneWithoutEvolutionInput {

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create?: EvolutionTriggersCreateWithoutEvolutionInput;

    @Field(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: EvolutionTriggersCreateOrConnectWithoutEvolutionInput;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;
}
