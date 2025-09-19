import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManySpeciesInputEnvelope } from "../inputs/PokemonEggGroupCreateManySpeciesInputEnvelope";
import { PokemonEggGroupCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateOrConnectWithoutSpeciesInput";
import { PokemonEggGroupCreateWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateWithoutSpeciesInput";
import { PokemonEggGroupScalarWhereInput } from "../inputs/PokemonEggGroupScalarWhereInput";
import { PokemonEggGroupUpdateManyWithWhereWithoutSpeciesInput } from "../inputs/PokemonEggGroupUpdateManyWithWhereWithoutSpeciesInput";
import { PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput";
import { PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput } from "../inputs/PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateManyWithoutSpeciesNestedInput", {})
export class PokemonEggGroupUpdateManyWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateWithoutSpeciesInput], {
    nullable: true
  })
  create?: PokemonEggGroupCreateWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateOrConnectWithoutSpeciesInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupCreateOrConnectWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  upsert?: PokemonEggGroupUpsertWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateManySpeciesInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupCreateManySpeciesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonEggGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonEggGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonEggGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput], {
    nullable: true
  })
  update?: PokemonEggGroupUpdateWithWhereUniqueWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpdateManyWithWhereWithoutSpeciesInput], {
    nullable: true
  })
  updateMany?: PokemonEggGroupUpdateManyWithWhereWithoutSpeciesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEggGroupScalarWhereInput[] | undefined;
}
