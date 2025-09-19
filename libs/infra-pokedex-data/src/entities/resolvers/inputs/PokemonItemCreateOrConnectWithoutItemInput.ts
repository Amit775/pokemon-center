import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemCreateWithoutItemInput } from "../inputs/PokemonItemCreateWithoutItemInput";
import { PokemonItemWhereUniqueInput } from "../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemCreateOrConnectWithoutItemInput", {})
export class PokemonItemCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateWithoutItemInput, {
    nullable: false
  })
  create!: PokemonItemCreateWithoutItemInput;
}
