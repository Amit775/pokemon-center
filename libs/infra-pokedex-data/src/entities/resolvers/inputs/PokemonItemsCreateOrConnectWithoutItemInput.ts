import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateWithoutItemInput } from "../inputs/PokemonItemsCreateWithoutItemInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateOrConnectWithoutItemInput", {})
export class PokemonItemsCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateWithoutItemInput, {
    nullable: false
  })
  create!: PokemonItemsCreateWithoutItemInput;
}
