import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyItemInputEnvelope } from "../inputs/BerryCreateManyItemInputEnvelope";
import { BerryCreateOrConnectWithoutItemInput } from "../inputs/BerryCreateOrConnectWithoutItemInput";
import { BerryCreateWithoutItemInput } from "../inputs/BerryCreateWithoutItemInput";
import { BerryScalarWhereInput } from "../inputs/BerryScalarWhereInput";
import { BerryUpdateManyWithWhereWithoutItemInput } from "../inputs/BerryUpdateManyWithWhereWithoutItemInput";
import { BerryUpdateWithWhereUniqueWithoutItemInput } from "../inputs/BerryUpdateWithWhereUniqueWithoutItemInput";
import { BerryUpsertWithWhereUniqueWithoutItemInput } from "../inputs/BerryUpsertWithWhereUniqueWithoutItemInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateManyWithoutItemNestedInput", {})
export class BerryUpdateManyWithoutItemNestedInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutItemInput], {
    nullable: true
  })
  create?: BerryCreateWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutItemInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpsertWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  upsert?: BerryUpsertWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyItemInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyItemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BerryUpdateWithWhereUniqueWithoutItemInput], {
    nullable: true
  })
  update?: BerryUpdateWithWhereUniqueWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpdateManyWithWhereWithoutItemInput], {
    nullable: true
  })
  updateMany?: BerryUpdateManyWithWhereWithoutItemInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryScalarWhereInput[] | undefined;
}
