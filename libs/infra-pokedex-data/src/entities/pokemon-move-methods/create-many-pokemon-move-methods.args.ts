import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMoveMethodsCreateManyInput } from './pokemon-move-methods-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonMoveMethodsArgs {

    @Field(() => [PokemonMoveMethodsCreateManyInput], {nullable:false})
    @Type(() => PokemonMoveMethodsCreateManyInput)
    data!: Array<PokemonMoveMethodsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
