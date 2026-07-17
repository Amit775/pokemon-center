import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesCreateManyInput } from './pokemon-form-types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonFormTypesArgs {

    @Field(() => [PokemonFormTypesCreateManyInput], {nullable:false})
    @Type(() => PokemonFormTypesCreateManyInput)
    data!: Array<PokemonFormTypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
