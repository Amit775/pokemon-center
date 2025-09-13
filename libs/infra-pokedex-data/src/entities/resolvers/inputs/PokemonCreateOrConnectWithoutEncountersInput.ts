import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutEncountersInput } from "../inputs/PokemonCreateWithoutEncountersInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutEncountersInput", {})
export class PokemonCreateOrConnectWithoutEncountersInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutEncountersInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutEncountersInput;
}
