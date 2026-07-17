import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyColorInput } from './pokemon-species-create-many-color.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyColorInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyColorInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyColorInput)
    data!: Array<PokemonSpeciesCreateManyColorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
