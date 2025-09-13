import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateManyWithoutHabitatNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutHabitatNestedInput";

@TypeGraphQL.InputType("PokemonHabitatsUpdateInput", {})
export class PokemonHabitatsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutHabitatNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutHabitatNestedInput | undefined;
}
