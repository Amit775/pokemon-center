import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutAbilitiesInput } from "../inputs/PokemonCreateWithoutAbilitiesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutAbilitiesInput", {})
export class PokemonCreateOrConnectWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutAbilitiesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutAbilitiesInput;
}
