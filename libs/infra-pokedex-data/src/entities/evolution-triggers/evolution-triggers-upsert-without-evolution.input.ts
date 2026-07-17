import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionTriggersUpdateWithoutEvolutionInput } from './evolution-triggers-update-without-evolution.input';
import { Type } from 'class-transformer';
import { EvolutionTriggersCreateWithoutEvolutionInput } from './evolution-triggers-create-without-evolution.input';
import { EvolutionTriggersWhereInput } from './evolution-triggers-where.input';

@InputType()
export class EvolutionTriggersUpsertWithoutEvolutionInput {

    @Field(() => EvolutionTriggersUpdateWithoutEvolutionInput, {nullable:false})
    @Type(() => EvolutionTriggersUpdateWithoutEvolutionInput)
    update!: EvolutionTriggersUpdateWithoutEvolutionInput;

    @Field(() => EvolutionTriggersCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => EvolutionTriggersCreateWithoutEvolutionInput)
    create!: EvolutionTriggersCreateWithoutEvolutionInput;

    @Field(() => EvolutionTriggersWhereInput, {nullable:true})
    @Type(() => EvolutionTriggersWhereInput)
    where?: EvolutionTriggersWhereInput;
}
