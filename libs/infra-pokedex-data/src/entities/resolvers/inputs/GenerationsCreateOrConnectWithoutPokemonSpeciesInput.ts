import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateWithoutPokemonSpeciesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutPokemonSpeciesInput", {})
export class GenerationsCreateOrConnectWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutPokemonSpeciesInput;
}
