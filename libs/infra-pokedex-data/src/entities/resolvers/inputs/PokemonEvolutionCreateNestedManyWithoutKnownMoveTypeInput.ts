import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope } from "../inputs/PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput";
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput", {})
export class PokemonEvolutionCreateNestedManyWithoutKnownMoveTypeInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutKnownMoveTypeInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
