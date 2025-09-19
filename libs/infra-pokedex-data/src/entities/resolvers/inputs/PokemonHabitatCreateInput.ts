import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateNestedManyWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutHabitatInput";

@TypeGraphQL.InputType("PokemonHabitatCreateInput", {})
export class PokemonHabitatCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutHabitatInput, {
    nullable: true
  })
  species?: PokemonSpeciesCreateNestedManyWithoutHabitatInput | undefined;
}
