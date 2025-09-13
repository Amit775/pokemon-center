import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateWithoutVersionInput } from "../inputs/PokemonItemsCreateWithoutVersionInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsCreateOrConnectWithoutVersionInput", {})
export class PokemonItemsCreateOrConnectWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonItemsCreateWithoutVersionInput;
}
