import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateManyPokemonFormInput } from './pokemon-form-types-create-many-pokemon-form.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormTypesCreateManyPokemonFormInputEnvelope {

    @Field(() => [PokemonFormTypesCreateManyPokemonFormInput], {nullable:false})
    @Type(() => PokemonFormTypesCreateManyPokemonFormInput)
    data!: Array<PokemonFormTypesCreateManyPokemonFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
