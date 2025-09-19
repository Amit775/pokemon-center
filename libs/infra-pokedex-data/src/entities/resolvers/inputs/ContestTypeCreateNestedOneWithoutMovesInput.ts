import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateOrConnectWithoutMovesInput } from "../inputs/ContestTypeCreateOrConnectWithoutMovesInput";
import { ContestTypeCreateWithoutMovesInput } from "../inputs/ContestTypeCreateWithoutMovesInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeCreateNestedOneWithoutMovesInput", {})
export class ContestTypeCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestTypeCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypeCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypeWhereUniqueInput | undefined;
}
