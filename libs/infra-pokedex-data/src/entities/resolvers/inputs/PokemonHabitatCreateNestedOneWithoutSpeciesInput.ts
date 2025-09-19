import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateOrConnectWithoutSpeciesInput";
import { PokemonHabitatCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateWithoutSpeciesInput";
import { PokemonHabitatWhereUniqueInput } from "../inputs/PokemonHabitatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatCreateNestedOneWithoutSpeciesInput", {})
export class PokemonHabitatCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonHabitatCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonHabitatCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonHabitatWhereUniqueInput | undefined;
}
