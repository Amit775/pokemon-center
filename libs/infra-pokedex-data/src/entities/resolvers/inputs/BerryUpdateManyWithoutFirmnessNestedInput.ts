import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyFirmnessInputEnvelope } from "../inputs/BerryCreateManyFirmnessInputEnvelope";
import { BerryCreateOrConnectWithoutFirmnessInput } from "../inputs/BerryCreateOrConnectWithoutFirmnessInput";
import { BerryCreateWithoutFirmnessInput } from "../inputs/BerryCreateWithoutFirmnessInput";
import { BerryScalarWhereInput } from "../inputs/BerryScalarWhereInput";
import { BerryUpdateManyWithWhereWithoutFirmnessInput } from "../inputs/BerryUpdateManyWithWhereWithoutFirmnessInput";
import { BerryUpdateWithWhereUniqueWithoutFirmnessInput } from "../inputs/BerryUpdateWithWhereUniqueWithoutFirmnessInput";
import { BerryUpsertWithWhereUniqueWithoutFirmnessInput } from "../inputs/BerryUpsertWithWhereUniqueWithoutFirmnessInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateManyWithoutFirmnessNestedInput", {})
export class BerryUpdateManyWithoutFirmnessNestedInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutFirmnessInput], {
    nullable: true
  })
  create?: BerryCreateWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutFirmnessInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpsertWithWhereUniqueWithoutFirmnessInput], {
    nullable: true
  })
  upsert?: BerryUpsertWithWhereUniqueWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyFirmnessInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyFirmnessInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  set?: BerryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BerryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  delete?: BerryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpdateWithWhereUniqueWithoutFirmnessInput], {
    nullable: true
  })
  update?: BerryUpdateWithWhereUniqueWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpdateManyWithWhereWithoutFirmnessInput], {
    nullable: true
  })
  updateMany?: BerryUpdateManyWithWhereWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryScalarWhereInput[] | undefined;
}
