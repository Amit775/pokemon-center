import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyEvolutionChainInputEnvelope } from "../inputs/PokemonSpeciesCreateManyEvolutionChainInputEnvelope";
import { PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput";
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from "../inputs/PokemonSpeciesCreateWithoutEvolutionChainInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput", {})
export class PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateWithoutEvolutionChainInput], {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput], {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateManyEvolutionChainInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonSpeciesCreateManyEvolutionChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonSpeciesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput[] | undefined;
}
