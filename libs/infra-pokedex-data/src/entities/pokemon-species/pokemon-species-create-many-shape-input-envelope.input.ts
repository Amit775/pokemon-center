import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyShapeInput } from './pokemon-species-create-many-shape.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyShapeInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyShapeInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyShapeInput)
    data!: Array<PokemonSpeciesCreateManyShapeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
