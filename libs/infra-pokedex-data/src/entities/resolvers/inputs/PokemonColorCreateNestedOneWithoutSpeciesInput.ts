import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonColorCreateOrConnectWithoutSpeciesInput";
import { PokemonColorCreateWithoutSpeciesInput } from "../inputs/PokemonColorCreateWithoutSpeciesInput";
import { PokemonColorWhereUniqueInput } from "../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.InputType("PokemonColorCreateNestedOneWithoutSpeciesInput", {})
export class PokemonColorCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonColorCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonColorCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonColorWhereUniqueInput | undefined;
}
