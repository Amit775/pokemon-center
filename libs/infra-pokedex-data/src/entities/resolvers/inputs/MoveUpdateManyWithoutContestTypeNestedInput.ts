import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestTypeInputEnvelope } from "../inputs/MoveCreateManyContestTypeInputEnvelope";
import { MoveCreateOrConnectWithoutContestTypeInput } from "../inputs/MoveCreateOrConnectWithoutContestTypeInput";
import { MoveCreateWithoutContestTypeInput } from "../inputs/MoveCreateWithoutContestTypeInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutContestTypeInput } from "../inputs/MoveUpdateManyWithWhereWithoutContestTypeInput";
import { MoveUpdateWithWhereUniqueWithoutContestTypeInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutContestTypeInput";
import { MoveUpsertWithWhereUniqueWithoutContestTypeInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutContestTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutContestTypeNestedInput", {})
export class MoveUpdateManyWithoutContestTypeNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: MoveCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  set?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutContestTypeInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutContestTypeInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
