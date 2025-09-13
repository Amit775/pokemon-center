import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestTypeInputEnvelope } from "../inputs/MovesCreateManyContestTypeInputEnvelope";
import { MovesCreateOrConnectWithoutContestTypeInput } from "../inputs/MovesCreateOrConnectWithoutContestTypeInput";
import { MovesCreateWithoutContestTypeInput } from "../inputs/MovesCreateWithoutContestTypeInput";
import { MovesScalarWhereInput } from "../inputs/MovesScalarWhereInput";
import { MovesUpdateManyWithWhereWithoutContestTypeInput } from "../inputs/MovesUpdateManyWithWhereWithoutContestTypeInput";
import { MovesUpdateWithWhereUniqueWithoutContestTypeInput } from "../inputs/MovesUpdateWithWhereUniqueWithoutContestTypeInput";
import { MovesUpsertWithWhereUniqueWithoutContestTypeInput } from "../inputs/MovesUpsertWithWhereUniqueWithoutContestTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateManyWithoutContestTypeNestedInput", {})
export class MovesUpdateManyWithoutContestTypeNestedInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: MovesCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpsertWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  upsert?: MovesUpsertWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  set?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  delete?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  update?: MovesUpdateWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesUpdateManyWithWhereWithoutContestTypeInput], {
    nullable: true
  })
  updateMany?: MovesUpdateManyWithWhereWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovesScalarWhereInput[] | undefined;
}
