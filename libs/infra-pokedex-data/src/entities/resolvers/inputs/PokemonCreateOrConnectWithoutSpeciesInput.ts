import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutSpeciesInput } from "../inputs/PokemonCreateWithoutSpeciesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutSpeciesInput", {})
export class PokemonCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutSpeciesInput;
}
