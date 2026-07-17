import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesCreateInput } from './pokemon-shapes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonShapesArgs {

    @Field(() => PokemonShapesCreateInput, {nullable:false})
    @Type(() => PokemonShapesCreateInput)
    data!: PokemonShapesCreateInput;
}
