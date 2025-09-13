import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope } from "../inputs/PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput";
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutEvolvedSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput", {})
export class PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutEvolvedSpeciesInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutEvolvedSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
