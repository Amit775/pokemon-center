import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonColorsCreateManyInput } from './pokemon-colors-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonColorsArgs {

    @Field(() => [PokemonColorsCreateManyInput], {nullable:false})
    @Type(() => PokemonColorsCreateManyInput)
    data!: Array<PokemonColorsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
