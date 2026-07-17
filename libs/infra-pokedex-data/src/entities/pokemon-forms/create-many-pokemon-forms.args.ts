import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormsCreateManyInput } from './pokemon-forms-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonFormsArgs {

    @Field(() => [PokemonFormsCreateManyInput], {nullable:false})
    @Type(() => PokemonFormsCreateManyInput)
    data!: Array<PokemonFormsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
