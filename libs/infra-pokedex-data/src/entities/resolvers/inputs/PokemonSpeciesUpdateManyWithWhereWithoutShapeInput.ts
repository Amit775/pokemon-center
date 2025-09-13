import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesScalarWhereInput } from "../inputs/PokemonSpeciesScalarWhereInput";
import { PokemonSpeciesUpdateManyMutationInput } from "../inputs/PokemonSpeciesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateManyWithWhereWithoutShapeInput", {})
export class PokemonSpeciesUpdateManyWithWhereWithoutShapeInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonSpeciesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateManyMutationInput;
}
