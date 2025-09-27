import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsScalarRelationFilter {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    is?: PokemonFormsWhereInput;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    isNot?: PokemonFormsWhereInput;
}
