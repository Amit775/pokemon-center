import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsScalarRelationFilter {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    is?: Identity<PokemonFormsWhereInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    isNot?: Identity<PokemonFormsWhereInput>;
}
