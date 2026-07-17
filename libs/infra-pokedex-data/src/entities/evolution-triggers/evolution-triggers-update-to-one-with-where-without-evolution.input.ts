import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersUpdateWithoutEvolutionInput } from './evolution-triggers-update-without-evolution.input';

@InputType()
export class EvolutionTriggersUpdateToOneWithWhereWithoutEvolutionInput {

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: Identity<EvolutionTriggersWhereInput>;

    @Field(() => EvolutionTriggersUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => EvolutionTriggersUpdateWithoutEvolutionInput)
    data!: Identity<EvolutionTriggersUpdateWithoutEvolutionInput>;
}
