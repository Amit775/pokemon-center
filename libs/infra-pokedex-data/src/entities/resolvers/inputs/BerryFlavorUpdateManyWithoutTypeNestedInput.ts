import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyTypeInputEnvelope } from "../inputs/BerryFlavorCreateManyTypeInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutTypeInput } from "../inputs/BerryFlavorCreateOrConnectWithoutTypeInput";
import { BerryFlavorCreateWithoutTypeInput } from "../inputs/BerryFlavorCreateWithoutTypeInput";
import { BerryFlavorScalarWhereInput } from "../inputs/BerryFlavorScalarWhereInput";
import { BerryFlavorUpdateManyWithWhereWithoutTypeInput } from "../inputs/BerryFlavorUpdateManyWithWhereWithoutTypeInput";
import { BerryFlavorUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/BerryFlavorUpdateWithWhereUniqueWithoutTypeInput";
import { BerryFlavorUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/BerryFlavorUpsertWithWhereUniqueWithoutTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateManyWithoutTypeNestedInput", {})
export class BerryFlavorUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutTypeInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: BerryFlavorUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: BerryFlavorUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: BerryFlavorUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorScalarWhereInput[] | undefined;
}
