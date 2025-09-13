import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope";
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodsScalarWhereInput";
import { VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionGroupPokemonMoveMethodsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupPokemonMoveMethodsScalarWhereInput[] | undefined;
}
