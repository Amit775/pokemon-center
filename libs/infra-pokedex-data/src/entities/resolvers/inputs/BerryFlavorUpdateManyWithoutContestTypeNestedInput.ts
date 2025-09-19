import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateManyContestTypeInputEnvelope } from "../inputs/BerryFlavorCreateManyContestTypeInputEnvelope";
import { BerryFlavorCreateOrConnectWithoutContestTypeInput } from "../inputs/BerryFlavorCreateOrConnectWithoutContestTypeInput";
import { BerryFlavorCreateWithoutContestTypeInput } from "../inputs/BerryFlavorCreateWithoutContestTypeInput";
import { BerryFlavorScalarWhereInput } from "../inputs/BerryFlavorScalarWhereInput";
import { BerryFlavorUpdateManyWithWhereWithoutContestTypeInput } from "../inputs/BerryFlavorUpdateManyWithWhereWithoutContestTypeInput";
import { BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput } from "../inputs/BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput";
import { BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput } from "../inputs/BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateManyWithoutContestTypeNestedInput", {})
export class BerryFlavorUpdateManyWithoutContestTypeNestedInput {
  @TypeGraphQL.Field(_type => [BerryFlavorCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: BerryFlavorCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: BerryFlavorCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  upsert?: BerryFlavorUpsertWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: BerryFlavorCreateManyContestTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  update?: BerryFlavorUpdateWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorUpdateManyWithWhereWithoutContestTypeInput], {
    nullable: true
  })
  updateMany?: BerryFlavorUpdateManyWithWhereWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BerryFlavorScalarWhereInput[] | undefined;
}
