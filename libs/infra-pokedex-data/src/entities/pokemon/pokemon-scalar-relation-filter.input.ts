import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonScalarRelationFilter {

    @Field(() => PokemonWhereInput, {nullable:true})
    is?: PokemonWhereInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    isNot?: PokemonWhereInput;
}
