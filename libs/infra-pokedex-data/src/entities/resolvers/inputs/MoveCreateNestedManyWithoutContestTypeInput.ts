import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyContestTypeInputEnvelope } from "../inputs/MoveCreateManyContestTypeInputEnvelope";
import { MoveCreateOrConnectWithoutContestTypeInput } from "../inputs/MoveCreateOrConnectWithoutContestTypeInput";
import { MoveCreateWithoutContestTypeInput } from "../inputs/MoveCreateWithoutContestTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutContestTypeInput", {})
export class MoveCreateNestedManyWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: MoveCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
