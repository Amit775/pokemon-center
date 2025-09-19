import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyBerryInputEnvelope } from "../inputs/BerryFlavorCreateManyBerryInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutBerryInput } from "../inputs/BerryFlavorCreateOrConnectWithoutBerryInput";
import { BerryFlavorCreateWithoutBerryInput } from "../inputs/BerryFlavorCreateWithoutBerryInput";
import { BerryFlavorScalarWhereInput } from "../inputs/BerryFlavorScalarWhereInput";
import { BerryFlavorUpdateManyWithWhereWithoutBerryInput } from "../inputs/BerryFlavorUpdateManyWithWhereWithoutBerryInput";
import { BerryFlavorUpdateWithWhereUniqueWithoutBerryInput } from "../inputs/BerryFlavorUpdateWithWhereUniqueWithoutBerryInput";
import { BerryFlavorUpsertWithWhereUniqueWithoutBerryInput } from "../inputs/BerryFlavorUpsertWithWhereUniqueWithoutBerryInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateManyWithoutBerryNestedInput", {})
export class BerryFlavorUpdateManyWithoutBerryNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutBerryInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutBerryInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpsertWithWhereUniqueWithoutBerryInput], {
    nullable: true
  })
  upsert?: BerryFlavorUpsertWithWhereUniqueWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyBerryInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyBerryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  set?: BerryFlavorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerryFlavorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  delete?: BerryFlavorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryFlavorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateWithWhereUniqueWithoutBerryInput], {
    nullable: true
  })
  update?: BerryFlavorUpdateWithWhereUniqueWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateManyWithWhereWithoutBerryInput], {
    nullable: true
  })
  updateMany?: BerryFlavorUpdateManyWithWhereWithoutBerryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorScalarWhereInput[] | undefined;
}
