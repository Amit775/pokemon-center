import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionChainsCreateInput } from './evolution-chains-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEvolutionChainsArgs {

    @Field(() => EvolutionChainsCreateInput, {nullable:false})
    @Type(() => EvolutionChainsCreateInput)
    data!: EvolutionChainsCreateInput;
}
