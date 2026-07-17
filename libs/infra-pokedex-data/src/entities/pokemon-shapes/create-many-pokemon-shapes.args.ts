import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesCreateManyInput } from './pokemon-shapes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonShapesArgs {

    @Field(() => [PokemonShapesCreateManyInput], {nullable:false})
    @Type(() => PokemonShapesCreateManyInput)
    data!: Array<PokemonShapesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
