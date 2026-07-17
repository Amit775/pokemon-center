import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersCreateManyInput } from './evolution-triggers-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEvolutionTriggersArgs {

    @Field(() => [EvolutionTriggersCreateManyInput], {nullable:false})
    @Type(() => EvolutionTriggersCreateManyInput)
    data!: Array<EvolutionTriggersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
