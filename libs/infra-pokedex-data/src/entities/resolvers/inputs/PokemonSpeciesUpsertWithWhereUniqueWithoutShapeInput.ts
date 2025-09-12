import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutShapeInput } from "../inputs/PokemonSpeciesCreateWithoutShapeInput";
import { PokemonSpeciesUpdateWithoutShapeInput } from "../inputs/PokemonSpeciesUpdateWithoutShapeInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput", {})
export class PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonSpeciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutShapeInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutShapeInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutShapeInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutShapeInput;
}
