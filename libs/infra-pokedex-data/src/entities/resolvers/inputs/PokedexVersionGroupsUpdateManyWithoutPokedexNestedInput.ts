import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyPokedexInputEnvelope } from "../inputs/PokedexVersionGroupsCreateManyPokedexInputEnvelope";
import { PokedexVersionGroupsCreateOrConnectWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateOrConnectWithoutPokedexInput";
import { PokedexVersionGroupsCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateWithoutPokedexInput";
import { PokedexVersionGroupsScalarWhereInput } from "../inputs/PokedexVersionGroupsScalarWhereInput";
import { PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput } from "../inputs/PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput";
import { PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput } from "../inputs/PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput";
import { PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput } from "../inputs/PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput", {})
export class PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokedexVersionGroupsCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupsCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  upsert?: PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupsCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  set?: PokedexVersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokedexVersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  delete?: PokedexVersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput], {
    nullable: true
  })
  update?: PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput], {
    nullable: true
  })
  updateMany?: PokedexVersionGroupsUpdateManyWithWhereWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexVersionGroupsScalarWhereInput[] | undefined;
}
