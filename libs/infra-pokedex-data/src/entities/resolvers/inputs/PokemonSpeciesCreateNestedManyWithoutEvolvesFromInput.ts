import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyEvolvesFromInputEnvelope } from "../inputs/PokemonSpeciesCreateManyEvolvesFromInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput";
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateWithoutEvolvesFromInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput", {})
export class PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutEvolvesFromInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyEvolvesFromInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyEvolvesFromInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
