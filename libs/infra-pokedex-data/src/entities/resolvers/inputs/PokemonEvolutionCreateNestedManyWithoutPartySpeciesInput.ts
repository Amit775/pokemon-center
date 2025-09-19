import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyPartySpeciesInputEnvelope } from "../inputs/PokemonEvolutionCreateManyPartySpeciesInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput";
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutPartySpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput", {})
export class PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutPartySpeciesInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyPartySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyPartySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
