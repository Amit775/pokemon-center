import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesCreateManyInput } from './pokemon-types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonTypesArgs {

    @Field(() => [PokemonTypesCreateManyInput], {nullable:false})
    @Type(() => PokemonTypesCreateManyInput)
    data!: Array<PokemonTypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
