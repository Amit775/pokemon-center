import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesScalarRelationFilter {

    @Field(() => PokedexesWhereInput, {nullable:true})
    is?: Identity<PokedexesWhereInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    isNot?: Identity<PokedexesWhereInput>;
}
