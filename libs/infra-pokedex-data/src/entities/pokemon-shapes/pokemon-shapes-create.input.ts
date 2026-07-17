import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-create-nested-many-without-shape.input';

@InputType()
export class PokemonShapesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutShapeInput, {nullable:true})
    species?: PokemonSpeciesCreateNestedManyWithoutShapeInput;
}
