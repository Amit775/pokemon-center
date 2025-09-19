import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateOrConnectWithoutMovesInput } from "../inputs/ContestTypeCreateOrConnectWithoutMovesInput";
import { ContestTypeCreateWithoutMovesInput } from "../inputs/ContestTypeCreateWithoutMovesInput";
import { ContestTypeUpdateToOneWithWhereWithoutMovesInput } from "../inputs/ContestTypeUpdateToOneWithWhereWithoutMovesInput";
import { ContestTypeUpsertWithoutMovesInput } from "../inputs/ContestTypeUpsertWithoutMovesInput";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeUpdateOneWithoutMovesNestedInput", {})
export class ContestTypeUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestTypeCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypeCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: ContestTypeUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  disconnect?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  delete?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: ContestTypeUpdateToOneWithWhereWithoutMovesInput | undefined;
}
