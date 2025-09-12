import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyHabitatInputEnvelope } from "../inputs/PokemonSpeciesCreateManyHabitatInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutHabitatInput";
import { PokemonSpeciesCreateWithoutHabitatInput } from "../inputs/PokemonSpeciesCreateWithoutHabitatInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutHabitatInput", {})
export class PokemonSpeciesCreateNestedManyWithoutHabitatInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutHabitatInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutHabitatInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutHabitatInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyHabitatInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyHabitatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
