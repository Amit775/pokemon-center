import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveInputEnvelope } from "../inputs/PokemonEvolutionCreateManyKnownMoveInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutKnownMoveInput";
import { PokemonEvolutionCreateWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutKnownMoveInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutKnownMoveInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyKnownMoveInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyKnownMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEvolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
