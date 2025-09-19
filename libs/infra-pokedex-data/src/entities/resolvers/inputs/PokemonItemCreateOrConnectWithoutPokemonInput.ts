import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutPokemonInput } from "../inputs/PokemonItemCreateWithoutPokemonInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateOrConnectWithoutPokemonInput", {})
export class PokemonItemCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutPokemonInput;
}
