import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCreateInput } from './evolution-triggers-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEvolutionTriggersArgs {

    @Field(() => EvolutionTriggersCreateInput, {nullable:false})
    @Type(() => EvolutionTriggersCreateInput)
    data!: Identity<EvolutionTriggersCreateInput>;
}
