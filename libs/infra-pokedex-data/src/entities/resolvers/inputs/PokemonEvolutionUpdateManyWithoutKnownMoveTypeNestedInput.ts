import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope } from "../inputs/PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope";
import { PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput";
import { PokemonEvolutionCreateWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionCreateWithoutKnownMoveTypeInput";
import { PokemonEvolutionScalarWhereInput } from "../inputs/PokemonEvolutionScalarWhereInput";
import { PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput";
import { PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput";
import { PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput } from "../inputs/PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput", {})
export class PokemonEvolutionUpdateManyWithoutKnownMoveTypeNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateWithoutKnownMoveTypeInput], {
    nullable: true
  })
  create?: PokemonEvolutionCreateWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEvolutionCreateOrConnectWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput], {
    nullable: true
  })
  upsert?: PokemonEvolutionUpsertWithWhereUniqueWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput], {
    nullable: true
  })
  update?: PokemonEvolutionUpdateWithWhereUniqueWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput], {
    nullable: true
  })
  updateMany?: PokemonEvolutionUpdateManyWithWhereWithoutKnownMoveTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEvolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEvolutionScalarWhereInput[] | undefined;
}
