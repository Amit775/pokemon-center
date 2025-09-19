import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyPartyTypeInputEnvelope } from "../inputs/PokemonEvolutionCreateManyPartyTypeInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutPartyTypeInput";
import { PokemonEvolutionCreateWithoutPartyTypeInput } from "../inputs/PokemonEvolutionCreateWithoutPartyTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutPartyTypeInput", {})
export class PokemonEvolutionCreateNestedManyWithoutPartyTypeInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutPartyTypeInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutPartyTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutPartyTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyPartyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyPartyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
