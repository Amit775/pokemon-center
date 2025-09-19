import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope";
import { VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodScalarWhereInput";
import { VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionGroupPokemonMoveMethodUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupPokemonMoveMethodScalarWhereInput[] | undefined;
}
