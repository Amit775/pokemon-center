import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyVersionGroupInputEnvelope } from "../inputs/PokedexVersionGroupCreateManyVersionGroupInputEnvelope";
import { PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput";
import { PokedexVersionGroupCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateWithoutVersionGroupInput";
import { PokedexVersionGroupScalarWhereInput } from "../inputs/PokedexVersionGroupScalarWhereInput";
import { PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput";
import { PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokedexVersionGroupUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput", {})
export class PokedexVersionGroupUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokedexVersionGroupCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokedexVersionGroupUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  set?: PokedexVersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokedexVersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: PokedexVersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokedexVersionGroupUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokedexVersionGroupUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexVersionGroupScalarWhereInput[] | undefined;
}
