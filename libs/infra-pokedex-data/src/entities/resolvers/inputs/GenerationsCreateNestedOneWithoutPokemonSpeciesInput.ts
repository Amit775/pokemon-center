import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateOrConnectWithoutPokemonSpeciesInput";
import { GenerationsCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateWithoutPokemonSpeciesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutPokemonSpeciesInput", {})
export class GenerationsCreateNestedOneWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonSpeciesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutPokemonSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutPokemonSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
