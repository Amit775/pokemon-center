import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateManyGenerationInput } from './pokemon-form-generations-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormGenerationsCreateManyGenerationInputEnvelope {

    @Field(() => [PokemonFormGenerationsCreateManyGenerationInput], {nullable:false})
    @Type(() => PokemonFormGenerationsCreateManyGenerationInput)
    data!: Array<PokemonFormGenerationsCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
