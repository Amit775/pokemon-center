import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput";
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutPartySpeciesInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput", {})
export class PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPartySpeciesInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
