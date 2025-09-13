import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateWithoutPokemonInput } from "../inputs/PokemonItemsCreateWithoutPokemonInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateOrConnectWithoutPokemonInput", {})
export class PokemonItemsCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonItemsCreateWithoutPokemonInput;
}
