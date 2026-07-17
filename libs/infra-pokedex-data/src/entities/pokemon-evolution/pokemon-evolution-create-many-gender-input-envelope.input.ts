import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyGenderInput } from './pokemon-evolution-create-many-gender.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyGenderInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyGenderInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyGenderInput)
    data!: Array<PokemonEvolutionCreateManyGenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
