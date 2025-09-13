import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesScalarWhereInput } from "../inputs/PokemonFormTypesScalarWhereInput";
import { PokemonFormTypesUpdateManyMutationInput } from "../inputs/PokemonFormTypesUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormTypesUpdateManyWithWhereWithoutTypeInput", {})
export class PokemonFormTypesUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormTypesScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormTypesUpdateManyMutationInput;
}
