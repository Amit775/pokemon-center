import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupUpdateManyWithoutEggGroupNestedInput } from "../inputs/PokemonEggGroupUpdateManyWithoutEggGroupNestedInput";

@TypeGraphQL.InputType("EggGroupUpdateInput", {})
export class EggGroupUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateManyWithoutEggGroupNestedInput, {
    nullable: true
  })
  species?: PokemonEggGroupUpdateManyWithoutEggGroupNestedInput | undefined;
}
