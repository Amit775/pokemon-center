import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyNaturalGiftTypeInputEnvelope } from "../inputs/BerryCreateManyNaturalGiftTypeInputEnvelope";
import { BerryCreateOrConnectWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateOrConnectWithoutNaturalGiftTypeInput";
import { BerryCreateWithoutNaturalGiftTypeInput } from "../inputs/BerryCreateWithoutNaturalGiftTypeInput";
import { BerryScalarWhereInput } from "../inputs/BerryScalarWhereInput";
import { BerryUpdateManyWithWhereWithoutNaturalGiftTypeInput } from "../inputs/BerryUpdateManyWithWhereWithoutNaturalGiftTypeInput";
import { BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput } from "../inputs/BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput";
import { BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput } from "../inputs/BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryUpdateManyWithoutNaturalGiftTypeNestedInput", {})
export class BerryUpdateManyWithoutNaturalGiftTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  create?: BerryCreateWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  upsert?: BerryUpsertWithWhereUniqueWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyNaturalGiftTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyNaturalGiftTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  update?: BerryUpdateWithWhereUniqueWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryUpdateManyWithWhereWithoutNaturalGiftTypeInput], {
    nullable: true
  })
  updateMany?: BerryUpdateManyWithWhereWithoutNaturalGiftTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryScalarWhereInput[] | undefined;
}
