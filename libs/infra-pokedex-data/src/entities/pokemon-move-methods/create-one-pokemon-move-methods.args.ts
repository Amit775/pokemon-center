import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMoveMethodsCreateInput } from './pokemon-move-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonMoveMethodsArgs {

    @Field(() => PokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateInput)
    data!: PokemonMoveMethodsCreateInput;
}
