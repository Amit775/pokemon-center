import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGenerationInputEnvelope } from "../inputs/PokemonSpeciesCreateManyGenerationInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutGenerationInput";
import { PokemonSpeciesCreateWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateWithoutGenerationInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutGenerationInput", {})
export class PokemonSpeciesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
