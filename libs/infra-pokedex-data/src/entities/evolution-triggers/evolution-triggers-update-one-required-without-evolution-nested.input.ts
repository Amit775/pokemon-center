import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersCreateOrConnectWithoutEvolutionInput } from './evolution-triggers-create-or-connect-without-evolution.input';
import { EvolutionTriggersUpsertWithoutEvolutionInput } from './evolution-triggers-upsert-without-evolution.input';
import { Prisma } from '@prisma/client';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput } from './evolution-triggers-update-to-one-with-where-without-evolution.input';

@InputType()
export class EvolutionTriggersUpdateOneRequiredWithoutEvolutionNestedInput {

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create?: EvolutionTriggersCreateWithoutEvolutionInput;

    @Field(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersCreateOrConnectWithoutEvolutionInput)
    connectOrCreate?: EvolutionTriggersCreateOrConnectWithoutEvolutionInput;

    @Field(() => EvolutionTriggersUpsertWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersUpsertWithoutEvolutionInput)
    upsert?: EvolutionTriggersUpsertWithoutEvolutionInput;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

    @Field(() => EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput, {nullable:true})
    @Type(() => EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput)
    update?: EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput;
}
