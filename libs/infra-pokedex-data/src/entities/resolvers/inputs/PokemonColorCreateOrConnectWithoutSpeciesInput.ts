import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorCreateWithoutSpeciesInput } from "../inputs/PokemonColorCreateWithoutSpeciesInput";
import { PokemonColorWhereUniqueInput } from "../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.InputType("PokemonColorCreateOrConnectWithoutSpeciesInput", {})
export class PokemonColorCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonColorCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonColorCreateWithoutSpeciesInput;
}
