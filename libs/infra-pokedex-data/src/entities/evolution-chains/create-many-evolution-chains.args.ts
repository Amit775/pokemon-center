import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionChainsCreateManyInput } from './evolution-chains-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEvolutionChainsArgs {

    @Field(() => [EvolutionChainsCreateManyInput], {nullable:false})
    @Type(() => EvolutionChainsCreateManyInput)
    data!: Array<EvolutionChainsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
