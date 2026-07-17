import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesCreateManyGenerationInput } from './abilities-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class AbilitiesCreateManyGenerationInputEnvelope {

    @Field(() => [AbilitiesCreateManyGenerationInput], {nullable:false})
    @Type(() => AbilitiesCreateManyGenerationInput)
    data!: Array<AbilitiesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
