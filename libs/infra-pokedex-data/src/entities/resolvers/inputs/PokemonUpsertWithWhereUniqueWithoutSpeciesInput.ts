import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutSpeciesInput } from "../inputs/PokemonCreateWithoutSpeciesInput";
import { PokemonUpdateWithoutSpeciesInput } from "../inputs/PokemonUpdateWithoutSpeciesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpsertWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonUpsertWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutSpeciesInput;
}
