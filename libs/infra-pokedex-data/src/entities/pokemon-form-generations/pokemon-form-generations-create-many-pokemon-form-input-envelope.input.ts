import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateManyPokemonFormInput } from './pokemon-form-generations-create-many-pokemon-form.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormGenerationsCreateManyPokemonFormInputEnvelope {

    @Field(() => [PokemonFormGenerationsCreateManyPokemonFormInput], {nullable:false})
    @Type(() => PokemonFormGenerationsCreateManyPokemonFormInput)
    data!: Array<PokemonFormGenerationsCreateManyPokemonFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
