import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesScalarWhereInput } from "../inputs/PokemonTypesScalarWhereInput";
import { PokemonTypesUpdateManyMutationInput } from "../inputs/PokemonTypesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonTypesUpdateManyWithWhereWithoutTypeInput", {})
export class PokemonTypesUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonTypesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonTypesUpdateManyMutationInput;
}
