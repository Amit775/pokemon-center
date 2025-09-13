import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyVersionGroupInputEnvelope } from "../inputs/PokedexVersionGroupsCreateManyVersionGroupInputEnvelope";
import { PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput";
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateWithoutVersionGroupInput";
import { PokedexVersionGroupsScalarWhereInput } from "../inputs/PokedexVersionGroupsScalarWhereInput";
import { PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput";
import { PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput", {})
export class PokedexVersionGroupsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokedexVersionGroupsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupsCreateManyVersionGroupInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: PokedexVersionGroupsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: PokedexVersionGroupsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexVersionGroupsScalarWhereInput[] | undefined;
}
