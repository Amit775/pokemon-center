import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolvesToInput";
import { PokemonSpeciesCreateWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesToInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutEvolvesToInput", {})
export class PokemonSpeciesCreateNestedOneWithoutEvolvesToInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEvolvesToInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
