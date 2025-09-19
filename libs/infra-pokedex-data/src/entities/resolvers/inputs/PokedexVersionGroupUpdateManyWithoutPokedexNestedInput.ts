import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyPokedexInputEnvelope } from "../inputs/PokedexVersionGroupCreateManyPokedexInputEnvelope";
import { PokedexVersionGroupCreateOrConnectWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateOrConnectWithoutPokedexInput";
import { PokedexVersionGroupCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateWithoutPokedexInput";
import { PokedexVersionGroupScalarWhereInput } from "../inputs/PokedexVersionGroupScalarWhereInput";
import { PokedexVersionGroupUpdateManyWithWhereWithoutPokedexInput } from "../inputs/PokedexVersionGroupUpdateManyWithWhereWithoutPokedexInput";
import { PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput } from "../inputs/PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput";
import { PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput } from "../inputs/PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupUpdateManyWithoutPokedexNestedInput", {})
export class PokedexVersionGroupUpdateManyWithoutPokedexNestedInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokedexVersionGroupCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  upsert?: PokedexVersionGroupUpsertWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupCreateManyPokedexInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  update?: PokedexVersionGroupUpdateWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupUpdateManyWithWhereWithoutPokedexInput], {
    nullable: true
  })
  updateMany?: PokedexVersionGroupUpdateManyWithWhereWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexVersionGroupScalarWhereInput[] | undefined;
}
