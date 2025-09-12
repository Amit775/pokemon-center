import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateManyRegionInputEnvelope } from "../inputs/PokedexesCreateManyRegionInputEnvelope";
import { PokedexesCreateOrConnectWithoutRegionInput } from "../inputs/PokedexesCreateOrConnectWithoutRegionInput";
import { PokedexesCreateWithoutRegionInput } from "../inputs/PokedexesCreateWithoutRegionInput";
import { PokedexesScalarWhereInput } from "../inputs/PokedexesScalarWhereInput";
import { PokedexesUpdateManyWithWhereWithoutRegionInput } from "../inputs/PokedexesUpdateManyWithWhereWithoutRegionInput";
import { PokedexesUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/PokedexesUpdateWithWhereUniqueWithoutRegionInput";
import { PokedexesUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/PokedexesUpsertWithWhereUniqueWithoutRegionInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesUpdateManyWithoutRegionNestedInput", {})
export class PokedexesUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [PokedexesCreateWithoutRegionInput], {
    nullable: true
  })
  create?: PokedexesCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: PokedexesCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: PokedexesUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexesCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexesCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereUniqueInput], {
    nullable: true
  })
  set?: PokedexesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokedexesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereUniqueInput], {
    nullable: true
  })
  delete?: PokedexesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: PokedexesUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: PokedexesUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexesScalarWhereInput[] | undefined;
}
