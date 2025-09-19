import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManyEggGroupInputEnvelope } from "../inputs/PokemonEggGroupCreateManyEggGroupInputEnvelope";
import { PokemonEggGroupCreateOrConnectWithoutEggGroupInput } from "../inputs/PokemonEggGroupCreateOrConnectWithoutEggGroupInput";
import { PokemonEggGroupCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupCreateWithoutEggGroupInput";
import { PokemonEggGroupScalarWhereInput } from "../inputs/PokemonEggGroupScalarWhereInput";
import { PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput } from "../inputs/PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput";
import { PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput } from "../inputs/PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput";
import { PokemonEggGroupUpsertWithWhereUniqueWithoutEggGroupInput } from "../inputs/PokemonEggGroupUpsertWithWhereUniqueWithoutEggGroupInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateManyWithoutEggGroupNestedInput", {})
export class PokemonEggGroupUpdateManyWithoutEggGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateWithoutEggGroupInput], {
    nullable: true
  })
  create?: PokemonEggGroupCreateWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateOrConnectWithoutEggGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupCreateOrConnectWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpsertWithWhereUniqueWithoutEggGroupInput], {
    nullable: true
  })
  upsert?: PokemonEggGroupUpsertWithWhereUniqueWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateManyEggGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupCreateManyEggGroupInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput], {
    nullable: true
  })
  update?: PokemonEggGroupUpdateWithWhereUniqueWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput], {
    nullable: true
  })
  updateMany?: PokemonEggGroupUpdateManyWithWhereWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonEggGroupScalarWhereInput[] | undefined;
}
