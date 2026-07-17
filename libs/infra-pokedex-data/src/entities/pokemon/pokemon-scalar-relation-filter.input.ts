import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonScalarRelationFilter {

    @Field(() => PokemonWhereInput, {nullable:true})
    is?: Identity<PokemonWhereInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    isNot?: Identity<PokemonWhereInput>;
}
