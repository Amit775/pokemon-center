import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsCreateManyBabyTriggerItemInput } from './evolution-chains-create-many-baby-trigger-item.input';
import { Type } from 'class-transformer';

@InputType()
export class EvolutionChainsCreateManyBabyTriggerItemInputEnvelope {

    @Field(() => [EvolutionChainsCreateManyBabyTriggerItemInput], {nullable:false})
    @Type(() => EvolutionChainsCreateManyBabyTriggerItemInput)
    data!: Array<EvolutionChainsCreateManyBabyTriggerItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
