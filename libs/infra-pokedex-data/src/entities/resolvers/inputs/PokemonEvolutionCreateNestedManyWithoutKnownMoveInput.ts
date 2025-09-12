import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveInputEnvelope } from "../inputs/PokemonEvolutionCreateManyKnownMoveInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutKnownMoveInput";
import { PokemonEvolutionCreateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateNestedManyWithoutKnownMoveInput", {})
export class PokemonEvolutionCreateNestedManyWithoutKnownMoveInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutKnownMoveInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutKnownMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyKnownMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyKnownMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;
}
