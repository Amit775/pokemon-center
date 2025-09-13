import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTradeSpeciesInputEnvelope } from "../inputs/PokemonEvolutionCreateManyTradeSpeciesInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput";
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateWithoutTradeSpeciesInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput", {})
export class PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutTradeSpeciesInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyTradeSpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
