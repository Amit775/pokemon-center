import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateManyRegionInputEnvelope } from "../inputs/PokedexCreateManyRegionInputEnvelope";
import { PokedexCreateOrConnectWithoutRegionInput } from "../inputs/PokedexCreateOrConnectWithoutRegionInput";
import { PokedexCreateWithoutRegionInput } from "../inputs/PokedexCreateWithoutRegionInput";
import { PokedexScalarWhereInput } from "../inputs/PokedexScalarWhereInput";
import { PokedexUpdateManyWithWhereWithoutRegionInput } from "../inputs/PokedexUpdateManyWithWhereWithoutRegionInput";
import { PokedexUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/PokedexUpdateWithWhereUniqueWithoutRegionInput";
import { PokedexUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/PokedexUpsertWithWhereUniqueWithoutRegionInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexUpdateManyWithoutRegionNestedInput", {})
export class PokedexUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [PokedexCreateWithoutRegionInput], {
    nullable: true
  })
  create?: PokedexCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: PokedexUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereUniqueInput], {
    nullable: true
  })
  set?: PokedexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokedexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereUniqueInput], {
    nullable: true
  })
  delete?: PokedexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: PokedexUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: PokedexUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokedexScalarWhereInput[] | undefined;
}
