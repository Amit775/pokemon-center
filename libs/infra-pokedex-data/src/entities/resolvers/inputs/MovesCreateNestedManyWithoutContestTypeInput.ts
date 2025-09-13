import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyContestTypeInputEnvelope } from "../inputs/MovesCreateManyContestTypeInputEnvelope";
import { MovesCreateOrConnectWithoutContestTypeInput } from "../inputs/MovesCreateOrConnectWithoutContestTypeInput";
import { MovesCreateWithoutContestTypeInput } from "../inputs/MovesCreateWithoutContestTypeInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutContestTypeInput", {})
export class MovesCreateNestedManyWithoutContestTypeInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutContestTypeInput], {
    nullable: true
  })
  create?: MovesCreateWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutContestTypeInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutContestTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyContestTypeInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyContestTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
