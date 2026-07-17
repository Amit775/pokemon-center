import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-shape.input';

@InputType()
export class PokemonShapesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutShapeInput, {nullable:true})
    species?: PokemonSpeciesUncheckedCreateNestedManyWithoutShapeInput;
}
